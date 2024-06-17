import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {
    countryList,
    Merchant,
    Pos,
    primaryActivityType,
} from "../../../_models";
import {MerchantService, PosService, UserService} from "src/app/_services";
import {ActivatedRoute} from "@angular/router";
import {Subscription, first, forkJoin} from "rxjs";
import {LoadingService} from "src/app/_services/loading.service";
import {Location} from "@angular/common";
import {StorageService} from "src/app/_services/storage.service";
import {Access} from "src/app/_models/instrument";
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmCancelComponent} from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import {
    AddPosDialogComponent,
    PosDialogData,
} from "../dialog-create-pos/add-pos.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: "app-merchant-detail",
    templateUrl: "./merchant-detail.component.html",
    styleUrl: "./merchant-detail.component.css",
})
export class MerchantDetailComponent implements OnInit, OnDestroy {
    id: string;
    name: string;
    fiscalCode: string;
    primaryActivity: string;
    posList: any[] = [];
    accessList: any[] = [];
    address: string;
    isEnabled: boolean;
    zipCode: string;
    country: string;
    action: string;
    createNewAccess = false;
    createNewPos = false;

    businessList: string[] = primaryActivityType;
    countryList: string[] = countryList;

    subscription: Subscription;

    merchantId: string;

    merchant: Merchant = new Merchant();

    subscriptions = new Subscription();

    constructor(
        private cd: ChangeDetectorRef,
        private loadingService: LoadingService,
        private location: Location,
        private matDialog: MatDialog,
        private merchantService: MerchantService,
        private snackBar: MatSnackBar,
        private posService: PosService,
        private storageService: StorageService,
        private translate: TranslateService,
        private userService: UserService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.merchantId = params["id"];
            this.action = params["action"];
            this.loadingService.show();
            this.subscription = forkJoin({
                merchantData: this.merchantService.getMerchantById(this.merchantId),
                accessData: this.merchantService.getAccessList(this.merchantId),
                posData: this.merchantService.getMerchantPos(this.merchantId),
            }).subscribe(({merchantData, accessData, posData}) => {
                this.merchant = merchantData;
                this.id = merchantData.id;
                this.name = merchantData.name;
                this.isEnabled = merchantData.enabled;
                this.fiscalCode = merchantData.fiscalCode;
                this.primaryActivity = merchantData.primaryActivity;
                this.address = merchantData.address;
                this.zipCode = merchantData.zipCode;
                this.country = merchantData.country;
                this.accessList = accessData["users"] || [];
                this.posList = posData["pos"] || [];
                this.loadingService.hide();
                this.cd.detectChanges();
            });
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    goBack(): void {
        this.location.back();
    }

    handleAccessList(user): void {
        const role = user.role;
        const access = user.access;

        const addAccessSub = this.merchantService
            .addAccess(this.id, access.id, role)
            .subscribe({
                next: () => {
                    this.checkAccessCurrentUser(access.id);
                    this.updateAccessList();
                },
                error: (err) =>
                    console.error("Error adding new instrument access:", err),
            });
        this.subscriptions.add(addAccessSub);
    }

    onUpdateMerchant(key: string, value: any, isTableToUpdate: boolean) {
        const updatedMerchant = {...this.merchant};

        updatedMerchant[key] = value;

        this.merchantService
            .update(updatedMerchant)
            .subscribe({
                next: () => {
                    this.userService
                        .me()
                        .subscribe({
                            next: (res) => {
                                this.userService.updateUserOwnership(res)
                                this.merchant = updatedMerchant
                            },
                            error: (err) => {
                                console.error(err)

                                let ref = this.snackBar.open("Errore durante l'aggiornamento dei dati", 'close', {duration: 5000});
                                ref.afterDismissed().subscribe(res => {
                                })
                            }
                        })
                }, error: (err) => {
                    console.error(err)

                    let ref = this.snackBar.open("Errore durante la modifica", 'close', {duration: 5000});
                    ref.afterDismissed().subscribe(res => {
                    })
                }
            })
    }

    onEditPos(pos: Pos) {
        const posData = new PosDialogData();
        posData.merchantId = this.merchant.id;
        posData.pos = pos;
        posData.isEdit = true;

        const dialogRef = this.matDialog.open(AddPosDialogComponent, {
            data: posData,
        });
    }

    onAddPos() {
        const posData = new PosDialogData();
        posData.merchantId = this.merchant.id;
        posData.pos = null;
        posData.isEdit = false;

        const dialogRef = this.matDialog.open(AddPosDialogComponent, {
            data: posData,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.updatePosList();
                let successString;
                if (posData.isEdit) {
                    successString = "USER.EDIT_POS.SUCCESS";
                } else {
                    successString = "USER.ADD_POS.SUCCESS";
                }
                this.translate
                    .get(successString)
                    .pipe(first())
                    .subscribe((response) => {
                        this.openSnackBar(response);
                    });
            }
        });
    }

    onDeletePos(pos: Pos) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.posService.delete(pos.id).subscribe({
                next: () => {
                    this.updatePosList();
                },
            });
        });
    }

    onDeleteAccess(access: Access) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.merchantService.deleteAccess(this.id, access.userId).subscribe({
                next: () => {
                    this.checkAccessCurrentUser(access.userId);
                    this.updateAccessList();
                },
            });
        });
    }

    onCheckboxClick(): void {
        this.isEnabled = !this.isEnabled;
        this.onUpdateMerchant("enabled", this.isEnabled, false);
    }


    updateAccessList() {
        this.merchantService
            .getAccessList(this.merchantId)
            .subscribe((res) => (this.accessList = res["users"]));
    }

    updatePosList() {
        this.merchantService
            .getMerchantPos(this.merchantId)
            .subscribe((res) => (this.posList = res["pos"]));
    }

    checkAccessCurrentUser(idAccess: string) {
        const currentUser = this.storageService.load("currentUser");
        if (idAccess === currentUser.id) {
            this.userService
                .me()
                .subscribe((res) => this.userService.updateUserOwnership(res));
        }
    }

    openSnackBar(message = "null"): any {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }
    
    handleCancellationPos() {
    }
}
