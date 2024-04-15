import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SourceService} from "../../_services/source.service";
import {delay, forkJoin, Subscription, throwError} from "rxjs";
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

    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalItems: number;

    isLoading = false;


    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.merchantsList = this.getListMerchants()
        this.getListInstruments()
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
            if (result && result.name) {
                this.isLoading = true;
                this.sourceService.createInstrument(result.name, result.url).subscribe({
                    next: (user) => {
                        if (result.access && result.access.length > 0) {
                            const tasks = result.access.map(access =>

                                this.sourceService.addInstrumentAccess(user.id, access.id));
                            forkJoin(tasks).subscribe({
                                next: () => {
                                    console.log("All access rights added successfully.");
                                },
                                error: err => {
                                    console.error("Error adding access rights:", err);
                                },
                                complete: () => {
                                    this.getListInstruments();
                                    this.isLoading = false;
                                }
                            });
                        } else {
                            this.getListInstruments();
                            this.isLoading = false;
                        }
                    },
                    error: (err) => {
                        console.error("Error creating instrument:", err);
                        this.isLoading = false;
                    }
                });
            } else {
                console.error("Invalid result received:", result);
                this.isLoading = false;
            }
        });
    }

    onViewSource(user: any) {
        this.isLoading = true;
        this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {
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
    }

    onEditSource(user: any) {
        this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {
            const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                width: '900px',
                data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "edit"}
            });

            dialogRef.componentInstance.newAccess.subscribe((access: any) => {

                this.sourceService.addInstrumentAccess(user.id, access.id).subscribe(res2 => {
                    this.updateAccessList(user.id, dialogRef);
                })
            });

            dialogRef.componentInstance.deleteAccess.subscribe((access: any) => {
                this.sourceService.deleteInstrumentAccess(user.id, access.userId).subscribe(() => {
                    this.updateAccessList(user.id, dialogRef);
                });
            });

            dialogRef.afterClosed().subscribe(res => {

            });
        });
    }

    updateAccessList(userId: any, dialogRef: MatDialogRef<DialogViewUserComponent>) {
        this.sourceService.getInstrumentAccessList(userId).subscribe(res => {
            const accessList = res["users"]
            dialogRef.componentInstance.onUpdateData(accessList)
            this.cd.markForCheck()
        });
    }


    onDeleteSource(userToDelete: any) {
        this.sourceService.deleteInstrument(userToDelete.id).subscribe(res => {
            this.getListInstruments();
        });
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getListInstruments();
    }

    getListInstruments() {
        this.isLoading = true;

        this.subscriptions.add(
            this.sourceService.getInstrumentList(this.currentPage, this.itemsPerPage)
                .pipe(
                    catchError(error => {
                        console.error('Error fetching instruments:', error);
                        this.isLoading = false;
                        return throwError(() => error);
                    })
                ).subscribe(res => {
                if (res && res['data'] && res['data'].length > 0) {
                    this.instrumentsList = res['data'];
                    this.totalItems = res.totalCount;
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
