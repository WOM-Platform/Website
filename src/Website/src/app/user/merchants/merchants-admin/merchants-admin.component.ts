import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from "@angular/core";
import {MatIcon} from "@angular/material/icon";
import {
    DialogCreateMerchant,
    MerchantDialogData,
} from "../dialog-create-merchant/dialog-create-merchant.component";
import {DialogType} from "../../../_models/dialogType";
import {catchError, first} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {NgIf} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant} from "../../../_models";
import {MerchantService, UserService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {FiltersComponent} from "../../components/filters/filters.component";
import {finalize, of, Subscription} from "rxjs";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {LoadingService} from "../../../_services/loading.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../_services/snack-bar.service";

@Component({
    selector: "app-merchants-admin",
    standalone: true,
    imports: [MatIcon, AdminTableComponent, NgIf, SharedModule, FiltersComponent],
    templateUrl: "./merchants-admin.component.html",
    styleUrl: "./merchants-admin.component.css",
})
export class MerchantsAdminComponent implements OnInit {
    @Output() isLoading = new EventEmitter<boolean>();

    merchantsList;
    merchantsTableColumns = [
        {field: "name", hideOnMobile: false},
        {
            field: "primaryActivity",
            hideOnMobile: false,
        },
        {field: "WOM consumati", hideOnMobile: true},
    ];

    currentPage: number = 1;
    itemsPerPage: string;
    pageCount: number;
    totalItems: number;

    errorMessage: string = "";

    searchParameters = "";
    formApiError: boolean;

    subscriptions = new Subscription();

    constructor(
        public matDialog: MatDialog,
        private merchantService: MerchantService,
        private cd: ChangeDetectorRef,
        private loadingService: LoadingService,
        private router: Router,
        private snackBarService: SnackBarService,
        private storageService: StorageService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.getMerchantsList();
    }

    getMerchantsList() {
        this.loadingService.show();

        this.merchantService
            .getAllMerchants(
                this.searchParameters,
                this.currentPage,
                this.itemsPerPage
            )
            .subscribe({
                next: (res) => {
                    this.assignMerchantData(res);
                    this.cd.detectChanges();
                },
                error: (err) => console.error(err),
                complete: () => {
                    this.loadingService.hide();
                },
            });
    }

    private assignMerchantData(data) {
        this.totalItems = data.totalCount;
        this.pageCount = data.pageCount;
        this.itemsPerPage = data.pageSize;
        this.merchantsList = data.data || [];
        this.currentPage =
            this.storageService.get("merchantsCurrentPage") || this.currentPage;
    }

    updateMerchantsList() {
        this.storageService.clearCache("merchantsList");
        this.userService.me().subscribe(() => {
            this.getMerchantsList();
        });
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();

        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        merchantDialogData.isAdmin = true;

        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData,
        });
        dialogRef.afterClosed().subscribe((merchant) => {
            if (merchant) {
                this.merchantService
                    .register(merchant)
                    .pipe(first())
                    .subscribe({
                            next: () => {
                                this.storageService.clear(this.storageService.merchantFormKey);
                                this.storageService.clearCache("merchantsList")
                                this.getMerchantsList()
                            },
                            error: (error) => {
                                this.formApiError = true;
                                console.error(error);
                            }
                        }
                    );
            }
        });
    }

    onViewMerchant(merchant: Merchant): void {
        this.openMerchantDetails(merchant, "view");
    }

    onEditMerchant(merchant: Merchant): void {
        this.openMerchantDetails(merchant, "edit");
    }

    openMerchantDetails(merchant: Merchant, action: string): void {
        this.router.navigate(["/user/merchants", merchant.id, action]);
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
                this.loadingService.show();
                // Check if the current user is in the access list
                this.merchantService.getAccessList(merchant.id).subscribe({
                    next: (res) => {
                        const accessList = res.users;
                        let isMyMerchantToUpdate: boolean = false;

                        const currentUser = this.storageService.load('currentUser');
                        if (accessList.find(acc => acc.userId === currentUser.id)) {
                            isMyMerchantToUpdate = true;
                        }

                        // Delete the merchant
                        this.merchantService.deleteMerchant(merchant.id).subscribe({
                            next: () => {
                                // Update user access if necessary
                                if (isMyMerchantToUpdate) {
                                    this.checkAccessCurrentUser();
                                }
                                this.storageService.clearCache("merchantsList")
                                // Refresh the merchants list
                                this.getMerchantsList();
                                this.snackBarService.openSnackBar("Merchant cancellato correttamente")
                            },
                            error: (err) => {
                                console.error("Error deleting merchant:", err);
                                this.snackBarService.openSnackBar("Errore nella cancellazione. Riprova");
                            },
                            complete: () => {
                                this.loadingService.hide();
                            }
                        });
                    },
                    error: (err) => {
                        console.error("Error fetching access list:", err);
                        this.snackBarService.openSnackBar("Error checking merchant access")
                        this.loadingService.hide();
                    }
                });
            }
        });
    }

    checkAccessCurrentUser() {
        this.storageService.clear('currentUser')
        this.userService
            .me()
            .subscribe((res) => {
                this.userService.updateUserOwnership(res)
            });
    }

    onPageChange(page: number): void {
        this.storageService.clearCache("merchantsList");
        this.currentPage = page;
        this.storageService.set("merchantsCurrentPage", this.currentPage);
        this.getMerchantsList();
    }

    filterUpdate(filter) {
        this.storageService.clearCache("merchantsList");
        this.itemsPerPage = filter.get("itemsPerPage").value;

        if (this.currentPage != 1) this.currentPage = 1;
        this.itemsPerPage = filter.get("itemsPerPage").value;
        if (
            filter.get("search").value.length >= 3 ||
            filter.get("search").value.length === 0
        ) {
            this.searchParameters = filter.get("search").value;
        }
        this.getMerchantsList();
    }
}
