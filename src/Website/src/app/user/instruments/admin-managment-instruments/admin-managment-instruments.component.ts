import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {
    finalize,
    forkJoin,
    of,
    Subject,
    Subscription,
} from "rxjs";
import {DialogCreateSourceComponent} from "../dialog-create-instrument/dialog-create-instrument.component";
import {DialogViewEditInstrumentComponent} from "../dialog-view-edit-instrument/dialog-view-edit-instrument.component";
import {MatDialog} from "@angular/material/dialog";
import {catchError} from "rxjs/operators";
import {SourceService} from "../../../_services/source.service";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {LoadingService} from "../../../_services/loading.service";
import {StorageService} from "../../../_services/storage.service";
import {AimsService, UserService} from "src/app/_services";
import {SnackBarService} from "../../../_services/snack-bar.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-admin-managment-instruments",
    templateUrl: "./admin-managment-instruments.component.html",
    styleUrl: "./admin-managment-instruments.component.css",
})
export class AdminManagmentInstrumentsComponent implements OnInit, OnDestroy {
    searchParameters: string = "";
    searchTerms = new Subject<string>();

    currentPage: number = 1;
    itemsPerPage: string;
    pageCount: number;
    totalItems: number;
    hasNext: boolean;
    hasPrev: boolean;

    tableToUpdate: boolean = false;

    errorMessage: string = "";

    instrumentsList: any;
    instrumentsTableColumns: any[] = [
        {field: "name", hideOnMobile: false},
        {field: "url", hideOnMobile: true},
    ];

    private subscriptions: Subscription[] = [];

    constructor(
        private aimsService: AimsService,
        private sourceService: SourceService,
        private matDialog: MatDialog,
        private cd: ChangeDetectorRef,
        private loadingService: LoadingService,
        private router: Router,
        private snackBarService: SnackBarService,
        private storageService: StorageService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.getSourcesList();
    }

    ngOnDestroy() {
        this.subscriptions.map((subscribe) => subscribe.unsubscribe());
    }

    getSourcesList() {
        this.loadingService.show();

        this.subscriptions.push(
            this.sourceService
                .getAllInstruments(
                    {
                        search: this.searchParameters,
                        page: this.currentPage,
                        itemsPerPage: this.itemsPerPage
                    }
                )
                .pipe(
                    catchError((error) => {
                        console.error("Error fetching instruments:", error);
                        this.userService.handle403Error(error);
                        return of(null);
                    }),
                    finalize(() => {
                        this.loadingService.hide();
                        this.cd.detectChanges();
                    })
                )
                .subscribe({
                    next:
                        (res) => {
                            this.assignInstrumentData(res);
                            this.cd.detectChanges()
                        },
                    error: (err) => {
                        console.error(err)
                        this.snackBarService.openSnackBar("Errore: riprova ad aggiornare la pagina")
                    }, complete: () => {
                        this.loadingService.hide();
                    },
                })
        );


    }

    private assignInstrumentData(data) {
        this.totalItems = data.totalCount;
        this.pageCount = data.pageCount;
        this.itemsPerPage = data.pageSize;
        this.instrumentsList = data.data || [];
        this.currentPage = data.page || this.currentPage;
        this.hasNext = data.hasNext
        this.hasPrev = data.hasPrev;
    }

    onCreateSource() {
        const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
            width: "900px",
            maxHeight: "90vh",
            panelClass: "custom-dialog-backdrop",
            data: {},
        });

        dialogRef.afterClosed().subscribe((instrum) => {
            if (instrum && instrum.name && instrum.url) {
                this.loadingService.show();
                this.cd.markForCheck();
                this.subscriptions.push(
                    this.sourceService
                        .createInstrument(instrum.name, instrum.url, instrum.aims)
                        .pipe(
                            catchError((error) => {
                                this.userService.handle403Error(error);
                                return of(null);
                            })
                        )
                        .subscribe({
                            next: (user) => {
                                this.storageService.clearCache("instrumentsList")
                                // add access users
                                this.processAccess(user, instrum);
                                this.getSourcesList()
                            },
                            error: () => {
                                this.errorMessage = "Failed to create instrument.";
                                this.loadingService.hide();
                                this.cd.markForCheck();
                            },
                        })
                );
            } else {
                this.errorMessage = "Invalid input data.";
                this.loadingService.hide();
                this.cd.markForCheck();
            }
        });
    }

    onUpdateItemsPerPage(value: string) {
        this.storageService.clearCache("instrumentsList");
        this.itemsPerPage = value;

        this.getSourcesList();
    }

    private processAccess(user, result) {
        if (result.access && result.access.length > 0) {
            this.subscriptions.push(
                this.sourceService
                    .addAccessSequentially(user.id, result.access)
                    .subscribe({
                        next: () => {
                            result.access.some((element) => element === user);
                        },
                        error: (err) => {
                            console.error("Error adding access rights:", err);
                            this.loadingService.hide();
                            this.cd.markForCheck();
                        },
                        complete: () => {
                            this.storageService.clearCache("instrumentsList");
                            this.getSourcesList();
                            this.loadingService.hide();
                            this.cd.markForCheck();
                        },
                    })
            );
        } else {
            this.storageService.clearCache("instrumentsList");
            this.getSourcesList();
            this.loadingService.hide();
            this.cd.markForCheck();
        }
    }

    onViewSource(user: any) {
        this.openDialogViewEdit(user, "view");
        // this.subscriptions.push(viewSub);
    }

    onEditSource(user: any) {
        this.openDialogViewEdit(user, "edit");
    }

    openDialogViewEdit(user, action: string) {
        this.loadingService.show();

        forkJoin({
            accessInstrument: this.sourceService.getInstrumentAccessList(user.id),
            dataInstrument: this.sourceService.getInstrument(user.id),
        }).pipe(
            catchError((error) => {
                this.userService.handle403Error(error);
                return of(null);
            })
        ).subscribe((res) => {
            this.loadingService.hide();

            const data = res.dataInstrument;

            const dialogRef = this.matDialog.open(
                DialogViewEditInstrumentComponent,
                {
                    width: "900px",
                    panelClass: "overflow-y-auto",
                    data: {
                        id: data.id,
                        name: data.name,
                        url: data.url,
                        access: res.accessInstrument["users"],
                        aims: data.aims,
                        action: action,
                    },
                }
            );

            dialogRef.componentInstance.updatedField.subscribe((field) => {
                this.tableToUpdate = true;

                dialogRef.afterClosed().subscribe((res) => {
                    // update the table if the edited field is shown on the admin table
                    if (this.tableToUpdate) {
                        this.storageService.clearCache("instrumentsList");
                        this.getSourcesList();
                        this.tableToUpdate = false;
                    }
                    this.loadingService.hide();
                    this.cd.markForCheck();
                });
            })

        });
    }

    onDeleteSource(instrumentToDelete: any) {
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
                this.sourceService.getInstrumentAccessList(instrumentToDelete.id).subscribe({
                    next: (res) => {
                        const accessList = res.users
                        let isMyInstrumentToUpdate: boolean = false

                        const currentUser = this.storageService.load('currentUser');
                        if (accessList.find(acc => acc.userId === currentUser.id)) {
                            isMyInstrumentToUpdate = true;
                        }

                        const delSub = this.sourceService
                            .deleteInstrument(instrumentToDelete.id)
                            .pipe(
                                catchError((error) => {
                                    this.userService.handle403Error(error);
                                    return of(null);
                                })
                            )
                            .subscribe({
                                next: (res) => {
                                    // Update user access if necessary
                                    if (isMyInstrumentToUpdate) {
                                        this.checkAccessCurrentUser();
                                    }
                                    this.storageService.clearCache("instrumentsList")
                                    // Refresh the instruments list
                                    this.getSourcesList();
                                    this.snackBarService.openSnackBar("Instrument cancellato correttamente")
                                },
                                error: (err) => {
                                    console.error("Error deleting instrument:", err);
                                    this.snackBarService.openSnackBar("Errore nella cancellazione. Riprova");
                                },
                                complete: () => {
                                    this.loadingService.hide();
                                }

                            });
                        this.subscriptions.push(delSub);

                    },
                    error: (err) => {
                        console.error("Error deleting instrument:", err);
                        this.snackBarService.openSnackBar("Errore. Riprova");
                        this.loadingService.hide();
                    },
                })
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
        this.storageService.clearCache("instrumentsList");
        this.currentPage = page;
        this.getSourcesList();
    }

    filterUpdate(filter) {
        this.storageService.clearCache("instrumentsList");
        if (this.currentPage != 1) this.currentPage = 1;
        this.itemsPerPage = filter.itemsPerPage;
        this.storageService.set("intrumentsItemsPerPage", this.itemsPerPage);
        if (
            filter.search.length >= 3 ||
            filter.search.length === 0
        ) {
            this.searchParameters = filter.search;
        }
        this.getSourcesList();
    }
}
