import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SourceService} from "../../_services/source.service";
import {Subject, forkJoin, Subscription, throwError} from "rxjs";
import {debounceTime} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogViewUserComponent} from "../components/dialog-view-user/dialog-view-user.component";
import {DialogCreateSourceComponent} from "../components/dialog-create-source/dialog-create-source.component";
import {catchError} from "rxjs/operators";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAdminComponent implements OnInit, OnDestroy {
    @Input() user: any;

    merchantsList: any[];
    instrumentsList: any;

    merchantsTableColumns: string[] = ['name', 'email']
    instrumentsTableColumns: string[] = ['name', 'url']

    sourcesSubscription: Subscription;

    searchParameters: string = ""
    searchTerms = new Subject<string>();

    currentPage: number = 1;
    itemsPerPage: number = 10;
    pageCount: number;
    totalItems: number;

    isLoading = false;
    errorMessage: string = '';


    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.merchantsList = this.getListMerchants();
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

    // BEGIN SOURCE FUNCTIONS

    onCreateSource() {
        const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
            width: '900px',
            panelClass: 'custom-dialog-backdrop',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.name && result.url) {
                this.isLoading = true;
                this.cd.markForCheck();
                const createSub = this.sourceService.createInstrument(result.name, result.url).subscribe({
                    next: (user) => {
                        this.processAccess(user, result);
                    },
                    error: (err) => {
                        this.errorMessage = 'Failed to create instrument.';
                        this.isLoading = false;
                        this.cd.markForCheck();
                    }
                });
                this.subscriptions.add(createSub);
            } else {
                this.errorMessage = 'Invalid input data.';
                this.isLoading = false;
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
                    this.isLoading = false;
                    this.cd.markForCheck();
                },
                complete: () => {
                    this.getSourcesList();
                    this.isLoading = false;
                    this.cd.markForCheck();
                }
            });
            this.subscriptions.add(accessSub);
        } else {
            this.getSourcesList();
            this.isLoading = false;
            this.cd.markForCheck();
        }
    }

    onViewSource(user: any) {
        this.isLoading = true;
        const viewSub = this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {
            this.isLoading = false
            const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                width: '900px',
                data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "view"}
            });
            dialogRef.afterClosed().subscribe(res => {
                this.isLoading = false
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
        const delAccessSub = this.sourceService.deleteInstrumentAccess(user.id, access.userId).subscribe({
            next: () => this.updateAccessList(user.id, dialogRef),
            error: err => console.error('Error deleting instrument access:', err)
        });
        this.subscriptions.add(delAccessSub);
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
        const delSub = this.sourceService.deleteInstrument(userToDelete.id).subscribe(res => {
            this.getSourcesList();
        });
        this.subscriptions.add(delSub)
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getSourcesList();
    }

    getSourcesList() {
        this.isLoading = true;

        this.subscriptions.add(
            this.sourceService.getInstrumentList(this.searchParameters, this.currentPage, this.itemsPerPage)
                .pipe(
                    catchError(error => {
                        console.error('Error fetching instruments:', error);
                        this.isLoading = false;
                        return throwError(() => error);
                    })
                ).subscribe(res => {
                if (res) {
                    this.totalItems = res.totalCount;
                    this.pageCount = res.pageCount;
                    if (res['data'])
                        this.instrumentsList = res['data'];
                }
                this.isLoading = false;
                this.cd.markForCheck()
            })
        );
    }

    // END SOURCE FUNCTIONS

    // BEGIN MERCHANT FUNCTIONS
    getListMerchants() {
        let mList = []
        console.log("GET LIST MERCHANTS")

        const m1 = {
            'name': 'Merchant genitrore',
            'email': 'klk@klkl.kl',
            'abilitato': true,
            'pos': 'sa i bè'
        };
        const m2 = {
            'name': 'Merchant pep',
            'email': 'klk@klkl.kl',
            'abilitato': true,
            'pos': 'sa i bè'
        };

        mList.push(m1)
        mList.push(m2)

        return mList
    }

    onCreateMerchant() {

    }


    // END MERCHANT FUNCTIONS


    // BEGIN STATS FUNCTIONS
    openStats() {
        this.router.navigateByUrl("user/stats/admin")
    }

    // END STATS FUNCTIONS
}
