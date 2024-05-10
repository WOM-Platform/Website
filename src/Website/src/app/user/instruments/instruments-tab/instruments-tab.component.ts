import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from "@angular/core";
import {finalize, of, Subject, Subscription, throwError} from "rxjs";
import {DialogCreateSourceComponent} from "../../components/dialog-create-source/dialog-create-source.component";
import {
    DialogViewEditSourceComponent
} from "../../components/dialog-view-edit-source/dialog-view-edit-source.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {SourceService} from "../../../_services/source.service";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {LoadingService} from "../../../_services/loading.service";
import {StorageService} from "../../../_services/storage.service";

@Component({
    selector: "app-instruments-tab",
    templateUrl: "./instruments-tab.component.html",
    styleUrl: "./instruments-tab.component.css",
})
export class InstrumentsTabComponent implements OnInit, OnDestroy {
    searchParameters: string = "";
    searchTerms = new Subject<string>();

    currentPage: number = 1;
    itemsPerPage: string;
    pageCount: number;
    totalItems: number;

    errorMessage: string = "";

    instrumentsList: any;
    instrumentsTableColumns: any[] = [
        {field: "name", hideOnMobile: false},
        {field: "url", hideOnMobile: true},
        {field: "WOM generati", hideOnMobile: true}
    ];

    sourcesSubscription: Subscription;
    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(
        private router: Router,
        private sourceService: SourceService,
        private matDialog: MatDialog,
        private cd: ChangeDetectorRef,
        private loadingService: LoadingService,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.getSourcesList();
    }

    getSourcesList() {
        this.loadingService.show();

        const cachedData = this.storageService.get("instrumentsList");
        if (cachedData) {
            this.assignInstrumentData(cachedData);
            this.loadingService.hide();
        } else {
            this.subscriptions.add(
                this.sourceService
                    .getInstrumentList(this.searchParameters, this.currentPage, this.itemsPerPage)
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
                            this.storageService.set("instrumentsList", res);
                            this.assignInstrumentData(res);
                        }
                    })
            );
        }
    }

    private assignInstrumentData(data) {
        this.totalItems = data.totalCount;
        this.pageCount = data.pageCount;
        this.itemsPerPage = data.pageSize
        this.instrumentsList = data.data || [];
        this.currentPage = this.storageService.get('instrumentsCurrentPage') || this.currentPage
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onCreateSource() {
        const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
            width: "900px",
            maxHeight: "90vh",
            panelClass: "custom-dialog-backdrop",
            data: {},
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result && result.name && result.url) {
                this.loadingService.show()
                this.cd.markForCheck();
                const createSub = this.sourceService
                    .createInstrument(result.name, result.url)
                    .subscribe({
                        next: (user) => {
                            this.processAccess(user, result);
                        },
                        error: (err) => {
                            this.errorMessage = "Failed to create instrument.";
                            this.loadingService.hide()
                            this.cd.markForCheck();
                        },
                    });
                this.subscriptions.add(createSub);
            } else {
                this.errorMessage = "Invalid input data.";
                this.loadingService.hide()
                this.cd.markForCheck();
            }
        });
    }

    onUpdateItemsPerPage(value: string) {
        this.storageService.clearCache("instrumentsList")
        this.itemsPerPage = value;

        this.getSourcesList();
    }

    private processAccess(user, result) {
        if (result.access && result.access.length > 0) {
            const accessSub = this.sourceService
                .addAccessSequentially(user.id, result.access)
                .subscribe({
                    next: () => console.log("All access rights added successfully."),
                    error: (err) => {
                        console.error("Error adding access rights:", err);
                        this.loadingService.hide()
                        this.cd.markForCheck();
                    },
                    complete: () => {
                        this.storageService.clearCache("instrumentsList")
                        this.getSourcesList();
                        this.loadingService.hide()
                        this.cd.markForCheck();
                    },
                });
            this.subscriptions.add(accessSub);
        } else {
            this.storageService.clearCache("instrumentsList")
            this.getSourcesList();
            this.loadingService.hide()
            this.cd.markForCheck();
        }
    }

    onViewSource(user: any) {
        this.loadingService.show()

        const viewKeys = [
            {field: 'id', isList: false},
            {field: 'url', isList: false},

        ]

        const viewSub = this.sourceService
            .getInstrumentAccessList(user.id)
            .subscribe((res) => {
                this.loadingService.hide()
                const dialogRef = this.matDialog.open(DialogViewEditSourceComponent, {
                    width: "900px",
                    data: {
                        id: user.id,
                        name: user.name,
                        url: user.url,
                        access: res["users"],
                        action: "view",
                    },
                });
                dialogRef.afterClosed().subscribe((res) => {
                    this.loadingService.hide()
                    this.cd.markForCheck();
                });
            });
        this.subscriptions.add(viewSub);
    }

    onEditSource(user: any) {
        const accessListSub = this.sourceService
            .getInstrumentAccessList(user.id)
            .subscribe({
                next: (res) => {
                    const dialogRef = this.matDialog.open(DialogViewEditSourceComponent, {
                        width: "900px",
                        maxHeight: "90vh",
                        panelClass: "custom-dialog-backdrop",
                        data: {
                            id: user.id,
                            name: user.name,
                            url: user.url,
                            access: res["users"],
                            action: "edit",
                        },
                    });

                    this.handleDialogInteractions(dialogRef, user);
                },
                error: (err) =>
                    console.error("Failed to get instrument access list:", err),
            });
        this.subscriptions.add(accessListSub);
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

        const afterCloseSub = dialogRef.afterClosed().subscribe({
            error: (err) => console.error("Dialog closed with error:", err),
            complete: () => console.log("Dialog closed"),
        });
        this.subscriptions.add(afterCloseSub);
    }

    
    private addAccess(user, acc, dialogRef) {
        const role = acc.role
        const access = acc.access

        const addAccessSub = this.sourceService
            .addInstrumentAccess(user.id, access.id)
            .subscribe({
                next: () => this.updateAccessList(user.id, dialogRef),
                error: (err) =>
                    console.error("Error adding new instrument access:", err),
            });
        this.subscriptions.add(addAccessSub);
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
                const delAccessSub = this.sourceService
                    .deleteInstrumentAccess(user.id, access.userId)
                    .subscribe({
                        next: () => this.updateAccessList(user.id, dialogRef),
                        error: (err) =>
                            console.error("Error deleting instrument access:", err),
                    });
                this.subscriptions.add(delAccessSub);
            }
        });
    }

    updateAccessList(
        userId: any,
        dialogRef: MatDialogRef<DialogViewEditSourceComponent>
    ) {
        const accessSub = this.sourceService
            .getInstrumentAccessList(userId)
            .subscribe((res) => {
                const accessList = res["users"];
                dialogRef.componentInstance.onUpdateData(accessList);
                this.cd.markForCheck();
            });
        this.subscriptions.add(accessSub);
    }

    onDeleteSource(userToDelete: any) {
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
                const delSub = this.sourceService
                    .deleteInstrument(userToDelete.id)
                    .subscribe((res) => {
                        this.storageService.clearCache("instrumentsList")
                        this.getSourcesList();
                    });
                this.subscriptions.add(delSub);
            }
        });
    }

    onPageChange(page: number): void {
        this.storageService.clearCache("instrumentsList")
        this.currentPage = page;
        this.storageService.set('instrumentsCurrentPage', this.currentPage)
        this.getSourcesList();
    }

    filterUpdate(filter) {
        this.storageService.clearCache("instrumentsList")
        if (this.currentPage != 1) this.currentPage = 1;
        this.itemsPerPage = filter.get('itemsPerPage').value
        this.storageService.set('intrumentsItemsPerPage', this.itemsPerPage)
        if (filter.get('search').value.length >= 3 || filter.get('search').value.length === 0) {
            this.searchParameters = filter.get('search').value
        }
        this.getSourcesList();
    }
}
