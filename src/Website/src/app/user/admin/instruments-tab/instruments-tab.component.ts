import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "../../../shared/shared.module";
import {Subject, Subscription, throwError} from "rxjs";
import {DialogCreateSourceComponent} from "../../components/dialog-create-source/dialog-create-source.component";
import {DialogViewUserComponent} from "../../components/dialog-view-user/dialog-view-user.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {catchError, debounceTime} from "rxjs/operators";
import {Router} from "@angular/router";
import {SourceService} from "../../../_services/source.service";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";

@Component({
    selector: 'app-instruments-tab',
    standalone: true,
    imports: [
        AdminTableComponent,
        MatIcon,
        NgIf,
        PaginatorModule,
        SharedModule
    ],
    templateUrl: './instruments-tab.component.html',
    styleUrl: './instruments-tab.component.css'
})
export class InstrumentsTabComponent implements OnInit, OnDestroy {
    @Output() isLoading = new EventEmitter<any>()
    searchParameters: string = ""
    searchTerms = new Subject<string>();

    currentPage: number = 1;
    itemsPerPage: number = 10;
    pageCount: number;
    totalItems: number;

    errorMessage: string = '';

    instrumentsList: any;
    instrumentsTableColumns: any[] = [{field: 'name', hideOnMobile: false}, {field: 'url', hideOnMobile: true}]

    sourcesSubscription: Subscription;
    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getSourcesList();
        // on search
        this.searchTerms.pipe(
            debounceTime(300),
        ).subscribe((term) => {
            this.searchParameters = term.trim();
            if (this.currentPage != 1) this.currentPage = 1
            if (this.searchParameters.length >= 3 || this.searchParameters.length === 0) {
                this.getSourcesList();
            }
        });
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe()
    }

    onCreateSource() {
        const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
            width: '900px',
            maxHeight: '90vh',
            panelClass: 'custom-dialog-backdrop',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.name && result.url) {
                this.isLoading.emit(true)
                this.cd.markForCheck();
                const createSub = this.sourceService.createInstrument(result.name, result.url).subscribe({
                    next: (user) => {
                        this.processAccess(user, result);
                    },
                    error: (err) => {
                        this.errorMessage = 'Failed to create instrument.';
                        this.isLoading.emit(false)
                        this.cd.markForCheck();
                    }
                });
                this.subscriptions.add(createSub);
            } else {
                this.errorMessage = 'Invalid input data.';
                this.isLoading.emit(false)
                this.cd.markForCheck();
            }
        });
    }

    private processAccess(user, result) {
        if (result.access && result.access.length > 0) {
            const accessSub = this.sourceService.addAccessSequentially(user.id, result.access).subscribe({
                next: () => console.log("All access rights added successfully."),
                error: err => {
                    console.error("Error adding access rights:", err);
                    this.isLoading.emit(false)
                    this.cd.markForCheck();
                },
                complete: () => {
                    this.getSourcesList();
                    this.isLoading.emit(false)
                    this.cd.markForCheck();
                }
            });
            this.subscriptions.add(accessSub);
        } else {
            this.getSourcesList();
            this.isLoading.emit(false)
            this.cd.markForCheck();
        }
    }

    onViewSource(user: any) {
        this.isLoading.emit(true)

        const viewSub = this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {
            this.isLoading.emit(false)
            const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                width: '900px',
                data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "view"}
            });
            dialogRef.afterClosed().subscribe(res => {
                this.isLoading.emit(false)
                this.cd.markForCheck()
            })
        })
        this.subscriptions.add(viewSub)
    }


    onEditSource(user: any) {
        const accessListSub = this.sourceService.getInstrumentAccessList(user.id).subscribe({
            next: res => {
                const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                    width: '900px',
                    maxHeight: '90vh',
                    panelClass: 'custom-dialog-backdrop',
                    data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "edit"}
                });

                this.handleDialogInteractions(dialogRef, user);
            },
            error: err => console.error('Failed to get instrument access list:', err)
        });
        this.subscriptions.add(accessListSub);
    }

    private handleDialogInteractions(dialogRef, user) {
        const newAccessSub = dialogRef.componentInstance.newAccess.subscribe({
            next: (access: any) => this.addAccess(user, access, dialogRef),
            error: err => console.error('Failed to handle new access:', err)
        });
        this.subscriptions.add(newAccessSub);

        const delAccessSub = dialogRef.componentInstance.deleteAccess.subscribe({
            next: (access: any) => this.deleteAccess(user, access, dialogRef),
            error: err => console.error('Failed to delete access:', err)
        });
        this.subscriptions.add(delAccessSub);

        const afterCloseSub = dialogRef.afterClosed().subscribe({
            error: err => console.error('Dialog closed with error:', err),
            complete: () => console.log('Dialog closed')
        });
        this.subscriptions.add(afterCloseSub);
    }

    private addAccess(user, access, dialogRef) {
        const addAccessSub = this.sourceService.addInstrumentAccess(user.id, access.id).subscribe({
            next: () => this.updateAccessList(user.id, dialogRef),
            error: err => console.error('Error adding new instrument access:', err)
        });
        this.subscriptions.add(addAccessSub);
    }

    private deleteAccess(user, access, dialogRef) {
        const dialogDeleteRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: '500px',
            data: {
                title: 'Conferma eliminazione',
                message: 'Sei sicuro di voler confermare l\'eliminazione?',
                confirm: "si",
                cancel: "Annulla"
            }
        });

        dialogDeleteRef.afterClosed().subscribe(result => {
            if (result) {
                const delAccessSub = this.sourceService.deleteInstrumentAccess(user.id, access.userId).subscribe({
                    next: () => this.updateAccessList(user.id, dialogRef),
                    error: err => console.error('Error deleting instrument access:', err)
                });
                this.subscriptions.add(delAccessSub);
            }
        });
    }


    updateAccessList(userId: any, dialogRef: MatDialogRef<DialogViewUserComponent>) {
        const accessSub = this.sourceService.getInstrumentAccessList(userId).subscribe(res => {
            const accessList = res["users"]
            dialogRef.componentInstance.onUpdateData(accessList)
            this.cd.markForCheck()
        });
        this.subscriptions.add(accessSub)
    }

    onDeleteSource(userToDelete: any) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: '500px',
            data: {
                title: 'Conferma eliminazione',
                message: 'Sei sicuro di voler confermare l\'eliminazione?',
                confirm: "si",
                cancel: "Annulla"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const delSub = this.sourceService.deleteInstrument(userToDelete.id).subscribe(res => {
                    this.getSourcesList();
                });
                this.subscriptions.add(delSub)
            }
        });
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getSourcesList();
    }

    getSourcesList() {
        this.isLoading.emit(true)

        this.subscriptions.add(
            this.sourceService.getInstrumentList(this.searchParameters, this.currentPage, this.itemsPerPage)
                .pipe(
                    catchError(error => {
                        console.error('Error fetching instruments:', error);
                        this.isLoading.emit(false)
                        return throwError(() => error);
                    })
                ).subscribe(res => {
                if (res) {
                    this.totalItems = res.totalCount;
                    this.pageCount = res.pageCount;
                    if (res['data'])
                        this.instrumentsList = res['data'];
                }
                this.isLoading.emit(false)
                this.cd.markForCheck()
            })
        );
    }


}
