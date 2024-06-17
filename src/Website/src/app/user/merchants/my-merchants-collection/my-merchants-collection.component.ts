import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {countryList, Merchant, primaryActivityType, UIMerchant} from "src/app/_models";
import {StorageService} from "src/app/_services/storage.service";
import {Subscription, first} from "rxjs";
import {DialogType} from "src/app/_models/dialogType";
import {EmailData} from "src/app/_models/emailData";
import {DialogConfirmCancelComponent} from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import {DialogConfirmComponent} from "src/app/components/dialog-confirm/dialog-confirm";
import {environment} from "src/environments/environment";
import {
    MerchantDialogData,
    DialogCreateMerchant,
} from "../dialog-create-merchant/dialog-create-merchant.component";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MerchantService, UserService} from "src/app/_services";
import {EmailService} from "src/app/_services/email.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Access} from "../../../_models/instrument";

@Component({
    selector: "app-my-merchants-collection",
    templateUrl: "./my-merchants-collection.component.html",
    styleUrl: "./my-merchants-collection.component.css",
    animations: [
        trigger("slideToggle", [
            state(
                "open",
                style({
                    height: "*",
                    opacity: 1,
                    overflow: "hidden",
                })
            ),
            state(
                "closed",
                style({
                    height: "0px",
                    opacity: 0,
                    overflow: "hidden",
                })
            ),
            transition("open <=> closed", [animate("300ms ease-in-out")]),
        ]),
        trigger("rotateArrow", [
            state("open", style({transform: 'rotate(180deg)'})),
            state("close", style({transform: 'rotate(0deg)'})
            ),
            transition('open <=> closed', [animate("300ms ease-in-out")])
        ])
    ],
})
export class MyMerchantsCollectionComponent implements OnInit {
    merchants: UIMerchant[];

    subscriptions: Subscription;
    actions: string[] = []

    constructor(
        private cd: ChangeDetectorRef,
        private emailService: EmailService,
        private matDialog: MatDialog,
        private merchantService: MerchantService,
        private snackBar: MatSnackBar,
        private storageService: StorageService,
        private translate: TranslateService,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): any {
        this.merchants = this.storageService.load("merchantData");
        this.merchants = this.merchants.map((merchant, idx) => ({
            ...merchant,
            isOpen: idx === 0
        }));


        this.merchants.map((merchant, idx) => {

                this.merchantService.getAccessList(merchant.id).subscribe(
                    {
                        next: (accessList) => {
                            this.actions[idx] = merchant.access === 'Admin' ? 'edit' : 'view'
                            this.merchants[idx] = {
                                ...this.merchants[idx],
                                accessList: accessList["users"]
                            }

                        },
                        error: err => console.error(err)
                    }
                )
            }
        );
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();

        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        merchantDialogData.isAdmin = false;

        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData,
        });
        dialogRef.afterClosed().subscribe((merchant) => {
            if (merchant) {
                this.merchantService
                    .register(merchant)
                    .pipe(first())
                    .subscribe({
                            next: (result: Merchant) => {
                                if (result) {
                                    this.merchantService.addAccess(result.id, this.userService.currentUserValue.id)
                                    this.loadData();
                                    this.translate
                                        .get("USER.ADD_MERCHANT.SUCCESS")
                                        .pipe(first())
                                        .subscribe((response) => {
                                            this.openSnackBar(response);
                                        });
                                    this.storageService.clear(this.storageService.merchantFormKey);
                                    this.updateMerchantsList();
                                }
                            },
                            error: (error) => {

                                console.error(error);
                            }
                        }
                    );
            }
        });
    }

    /*addMerchant(): any {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        merchantDialogData.isAdmin = false;
        merchantDialogData.accessToAdd

        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.loadData();
                this.translate
                    .get("USER.ADD_MERCHANT.SUCCESS")
                    .pipe(first())
                    .subscribe((response) => {
                        this.openSnackBar(response);
                    });

                this.updateMerchantsList();
            }
        });
    }*/

    updateMerchantsList() {
        this.userService.me().subscribe(() => {
            this.loadData();
        });
    }

    editMerchant(merchant: Merchant): any {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = merchant;
        merchantDialogData.type = DialogType.edit;
        this.merchantService
            .getAccessList(merchant.id)
            .subscribe({
                next: () => {
                    const dialogRef = this.matDialog.open(DialogCreateMerchant, {
                        data: merchantDialogData,
                    });
                    dialogRef.afterClosed().subscribe((result) => {
                        if (result) {
                            this.loadData();
                            this.translate
                                .get("USER.EDIT_MERCHANT.SUCCESS")
                                .pipe(first())
                                .subscribe((response) => {
                                    this.openSnackBar(response);
                                });
                        }
                    });
                },
            });
    }

    onUpdateMerchant(index: number, key: string, value: any) {
        const updatedMerchant = this.merchants[index];

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
                                this.merchants[index] = updatedMerchant
                            },
                            error: (err) => {
                                console.error(err)

                                let ref = this.snackBar.open("Errore durante l'aggiornamento dei dati", 'close', {duration: 5000});
                                ref.afterDismissed().subscribe(() => {
                                })
                            }
                        })
                }, error: (err) => {
                    console.error(err)

                    let ref = this.snackBar.open("Errore durante la modifica", 'close', {duration: 5000});
                    ref.afterDismissed().subscribe(() => {
                    })
                }
            })
    }

    onDeleteMerchant(merchant: Merchant) {
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
            if (result) {
                const delSub = this.merchantService
                    .deleteMerchant(merchant.id)
                    .subscribe(() => {
                        this.updateMerchantsList();
                    });
                this.subscriptions.add(delSub);
            }
        });
    }

    requestEnabling(merchant: Merchant) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            data: {
                title: this.translate.instant(
                    "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.TITLE"
                ),
                message: this.translate.instant(
                    "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.MESSAGE"
                ),
                confirm: this.translate.instant(
                    "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CONFIRM"
                ),
                cancel: this.translate.instant(
                    "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CANCEL"
                ),
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                let emailData = new EmailData();
                emailData.senderEmail = environment.noreplyEmail;
                emailData.senderName =
                    this.userService.currentUserValue.name +
                    " " +
                    this.userService.currentUserValue.surname;
                emailData.toEmail = environment.baseEmail;
                emailData.toName = "WOM Administrator";
                emailData.subject = "WOM Merchant request #" + merchant.id;
                emailData.content =
                    "Request from " +
                    this.userService.currentUserValue.email +
                    "  for merchant " +
                    "<br><b>id</b>: " +
                    merchant.id +
                    "<br><b>name:</b> " +
                    merchant.name +
                    "<br><b>fiscal code:</b> " +
                    merchant.fiscalCode;

                this.emailService.sendEmail(emailData).subscribe(
                    () => {
                        this.openSnackBar(
                            this.translate.instant(
                                "USER.MERCHANT.MERCHANT.SEND_ACTIVATION_REQUEST_CONFIRM"
                            )
                        );
                    },
                    (error) => {
                        console.error(error);
                        const dialogRefErr = this.matDialog.open(DialogConfirmComponent, {
                            data: {
                                title: this.translate.instant(
                                    "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.TITLE"
                                ),
                                message: this.translate.instant(
                                    "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.MESSAGE"
                                ),
                                confirm: this.translate.instant(
                                    "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.CONFIRM"
                                ),
                            },
                        });
                        dialogRefErr.afterClosed().subscribe(() => {
                        });
                    }
                );
            }
        });
    }

    openSnackBar(message = "null"): any {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }

    handleAccessList(user, merchantId, idx): void {
        const role = user.role;
        const access = user.access;

        const addAccessSub = this.merchantService
            .addAccess(merchantId, access.id, role)
            .subscribe({
                next: () => {
                    this.checkAccessCurrentUser(access.id);
                    this.updateAccessList(merchantId, idx);
                },
                error: (err) =>
                    console.error("Error adding new instrument access:", err),
            });
        this.subscriptions.add(addAccessSub);
    }


    onDeleteAccess(access: Access, merchantId, idx) {
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
            this.merchantService.deleteAccess(merchantId, access.userId).subscribe({
                next: () => {
                    this.checkAccessCurrentUser(access.userId);
                    this.updateAccessList(merchantId, idx);
                },
            });
        });
    }


    updateAccessList(merchantId, idx) {
        this.merchantService
            .getAccessList(merchantId)
            .subscribe((res) => (this.merchants[idx].accessList = res["users"]));
    }


    checkAccessCurrentUser(idAccess: string) {
        const currentUser = this.storageService.load("currentUser");
        if (idAccess === currentUser.id) {
            this.userService
                .me()
                .subscribe((res) => this.userService.updateUserOwnership(res));
        }
    }

    protected readonly businessList = primaryActivityType;
    protected readonly countryList = countryList;
}
