import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
    DialogCreateMerchant,
    MerchantDialogData
} from "../../components/dialog-create-merchant/dialog-create-merchant";
import {DialogType} from "../../../_models/dialogType";
import {catchError, first} from "rxjs/operators";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {NgIf} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant} from "../../../_models";
import {MerchantService, PosService, UserService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {FiltersComponent} from "../../components/filters/filters.component";
import {finalize, of, Subscription} from "rxjs";
import {
    DialogViewEditMerchantComponent
} from "../../components/dialog-view-edit-merchant/dialog-view-edit-merchant.component";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {LoadingService} from "../../../_services/loading.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-merchants-tab',
    standalone: true,
    imports: [
        MatIcon,
        AdminTableComponent,
        NgIf,
        SharedModule,
        FiltersComponent
    ],
    templateUrl: './merchants-tab.component.html',
    styleUrl: './merchants-tab.component.css'
})
export class MerchantsTabComponent implements OnInit {
    @Output() isLoading = new EventEmitter<boolean>()

    merchantsList
    merchantsTableColumns = [{field: "name", hideOnMobile: false}, {
        field: "primaryActivity",
        hideOnMobile: false
    }, {field: "WOM consumati", hideOnMobile: true}]

    currentPage: number = 1;
    itemsPerPage: string;
    pageCount: number;
    totalItems: number;

    errorMessage: string = "";

    searchParameters = ""
    formApiError: boolean;

    subscriptions = new Subscription()

    constructor(public matDialog: MatDialog,
                private merchantService: MerchantService,
                private cd: ChangeDetectorRef,
                private loadingService: LoadingService,
                private posService: PosService,
                private router: Router,
                private storageService: StorageService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.getMerchantsList()
    }

    getMerchantsList() {
        this.loadingService.show();
        const cachedData = this.storageService.get("merchantsList");
        if (cachedData) {
            this.assignMerchantData(cachedData);
            this.loadingService.hide();
        } else {
            this.subscriptions.add(
                this.merchantService.getAllMerchants(this.searchParameters, this.currentPage, this.itemsPerPage)
                    .pipe(
                        catchError((error) => {
                            console.error("Error fetching instruments:", error);
                            return of(null);
                        }),
                        finalize(() => {
                            this.loadingService.hide();
                            this.cd.markForCheck();
                        })
                    )
                    .subscribe(res => {
                        if (res) {
                            this.storageService.set("merchantsList", res);
                            this.assignMerchantData(res);
                        }
                    }))
        }
    }

    private assignMerchantData(data) {
        this.totalItems = data.totalCount;
        this.pageCount = data.pageCount;
        this.itemsPerPage = data.pageSize
        this.merchantsList = data.data || [];
        this.currentPage = this.storageService.get('merchantsCurrentPage') || this.currentPage
    }

    updateMerchantsList() {
        this.storageService.clearCache("merchantsList")
        this.userService.me().subscribe(user => {
            this.getMerchantsList()
        })
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(merchant => {
            if (merchant) {
                this.merchantService.register(merchant).pipe(first()).subscribe(
                    result => {
                        this.storageService.clear(this.storageService.merchantFormKey);
                    }, error => {
                        this.formApiError = true;
                        console.error(error);
                    });
            }
        });
    }

    onViewMerchant(merchant: Merchant): void {
        this.openMerchantDialog(merchant, 'view');
    }

    onEditMerchant(merchant: Merchant): void {
        this.openMerchantDialog(merchant, 'edit');
    }

    private openMerchantDialog(merchant: Merchant, action: string): void {
        const accessListSub = this.merchantService
            .getAccessList(merchant.id)
            .subscribe({
                next: (res) => {
                    console.log('merch ', merchant)
                    const dialogRef = this.matDialog.open(DialogViewEditMerchantComponent, {
                        width: "900px",
                        panelClass: "overflow-auto",
                        data: {
                            ...merchant,
                            access: res['users'],
                            primaryActivity: merchant.primaryActivity,
                            action,
                        },
                    });
                    this.handleDialogInteractions(dialogRef, merchant);
                },
                error: (err) => console.error("Failed to get instrument access list:", err),
            });
        this.subscriptions.add(accessListSub);
    }

    openMerchantDetails(merchant: Merchant, action: string): void {
        this.router.navigate(['/merchants', merchant.id, action]);
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
                    .subscribe((res) => {
                        this.updateMerchantsList();
                    });
                this.subscriptions.add(delSub);
            }
        });
    }

    private handleDialogInteractions(dialogRef, user) {
        const newAccessSub = dialogRef.componentInstance.newAccess.subscribe({
            next: (access: any) => this.addAccess(user, access, dialogRef),
            error: (err) => console.error("Failed to handle new access:", err),
        });
        this.subscriptions.add(newAccessSub);

        const delAccessSub = dialogRef.componentInstance.deleteAccess.subscribe({
            next: (access: any) => this.deleteAccess(user, access, dialogRef),
            error: (err) => console.error("Failed to delete access:", err),
        });
        this.subscriptions.add(delAccessSub);

        const deletePos = dialogRef.componentInstance.deletePos.subscribe({
            next: (access: any) => this.deletePos(user, access, dialogRef),
            error: (err) => console.error("Failed to delete access:", err),
        });
        this.subscriptions.add(deletePos);

        const afterCloseSub = dialogRef.afterClosed().subscribe({
            error: (err) => console.error("Dialog closed with error:", err),
            complete: () => {
            },
        });
        this.subscriptions.add(afterCloseSub);
    }

    private addAccess(user, acc, dialogRef) {
        console.log("acc ", acc)
        const role = acc.role
        const access = acc.access

        const addAccessSub = this.merchantService
            .addAccess(user.id, access.id, role)
            .subscribe({
                next: () => this.updateAccessList(user.id, dialogRef),
                error: (err) =>
                    console.error("Error adding new instrument access:", err),
            });
        this.subscriptions.add(addAccessSub);
    }

    updateAccessList(
        userId: any,
        dialogRef: MatDialogRef<DialogViewEditMerchantComponent>
    ) {
        const accessSub = this.merchantService
            .getAccessList(userId)
            .subscribe((res) => {
                const accessList = res["users"];
                dialogRef.componentInstance.onUpdateDataAccess(accessList);
                this.cd.markForCheck();
            });
        this.subscriptions.add(accessSub);
    }

    updatePosList(
        userId: any,
        dialogRef: MatDialogRef<DialogViewEditMerchantComponent>
    ) {
        const accessSub = this.posService
            .get(userId)
            .subscribe((res) => {
                const posList = res["users"];
                dialogRef.componentInstance.onUpdateDataPos(posList);
                this.cd.markForCheck();
            });
        this.subscriptions.add(accessSub);
    }


    private deletePos(user, pos, dialogRef) {
        console.log("user ", user)
        const dialogDeleteRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });

        dialogDeleteRef.afterClosed().subscribe((result) => {
            if (result) {

                const delAccessSub = this.posService
                    .delete(pos.id)
                    .subscribe({
                        next: () => {
                            this.updatePosList(user.id, dialogRef)
                        },
                        error: (err) =>
                            console.error("Error deleting instrument access:", err),
                    });
                this.subscriptions.add(delAccessSub);
            }
        });
    }

    private deleteAccess(user, access, dialogRef) {
        const dialogDeleteRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });

        dialogDeleteRef.afterClosed().subscribe((result) => {
            if (result) {
                const delAccessSub = this.merchantService
                    .deleteAccess(user.id, access.userId)
                    .subscribe({
                        next: () => {
                            this.updateAccessList(user.id, dialogRef)
                        },
                        error: (err) =>
                            console.error("Error deleting instrument access:", err),
                    });
                this.subscriptions.add(delAccessSub);
            }
        });
    }


    onPageChange(page: number): void {
        this.storageService.clearCache("merchantsList")
        this.currentPage = page;
        this.storageService.set('merchantsCurrentPage', this.currentPage)
        this.getMerchantsList();
    }

    filterUpdate(filter) {
        console.log("Update")
        this.storageService.clearCache("merchantsList")
        this.itemsPerPage = filter.get('itemsPerPage').value

        if (this.currentPage != 1) this.currentPage = 1;
        this.itemsPerPage = filter.get('itemsPerPage').value
        if (filter.get('search').value.length >= 3 || filter.get('search').value.length === 0) {
            this.searchParameters = filter.get('search').value
        }
        this.getMerchantsList();
    }
}
