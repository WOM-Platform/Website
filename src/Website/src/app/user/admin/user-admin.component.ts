import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SourceService} from "../../_services/source.service";
import {Subscription} from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogViewUserComponent} from "../components/dialog-view-user/dialog-view-user.component";
import {DialogCreateSourceComponent} from "../components/dialog-create-source/dialog-create-source.component";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAdminComponent implements OnInit {
    @Input() user: any;

    merchantsList: any[];
    instrumentsList: any;

    merchantsTableColumns: string[] = ['name', 'email']
    instrumentsTableColumns: string[] = ['name', 'url']

    sourcesSubscription: Subscription;

    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalItems: number;


    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog) {
    }

    ngOnInit() {
        this.merchantsList = this.getListMerchants()
        this.getListInstruments()
    }

    // BEGIN SOURCE FUNCTIONS
    onCreateSource() {
        const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
            width: '800px',
            panelClass: 'custom-dialog-backdrop',
            data: {}
        });

        dialogRef.componentInstance.dialogRef.afterClosed().subscribe(result => {
            if (result && result.name && result.url) {
                this.sourceService.createInstrument(result).subscribe({
                    next: (value) => {
                        this.getListInstruments(); // Use arrow function to preserve the context of `this`
                    },
                    error: (err) => {
                        console.error("Error creating instrument:", err);
                    }
                });
            } else {
                console.error("Invalid result received:", result);
            }
        });
    }

    onViewSource(user: any) {
        console.log("Dati invio ", user.id)
        this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {


            const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                width: '800px',
                data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "view"}
            });
            dialogRef.afterClosed().subscribe(res => {
                console.log("View closed")
            })

        })
    }

    onEditSource(user: any) {
        this.sourceService.getInstrumentAccessList(user.id).subscribe(res => {
            const dialogRef = this.matDialog.open(DialogViewUserComponent, {
                width: '800px',
                data: {id: user.id, name: user.name, url: user.url, access: res["users"], action: "edit"}
            });

            dialogRef.componentInstance.newAccess.subscribe((accesss: any) => {
                this.sourceService.addInstrumentAccess(user.id, accesss.userId).subscribe(res2 => {
                    this.updateAccessList(user.id, dialogRef);
                })
            });

            dialogRef.componentInstance.deleteAccess.subscribe((access: any) => {
                this.sourceService.deleteInstrumentAccess(user.id, access.userId).subscribe(() => {
                    this.updateAccessList(user.id, dialogRef);
                });
            });

            dialogRef.afterClosed().subscribe(res => {
                console.log("View closed");
            });
        });
    }

    updateAccessList(userId: any, dialogRef: MatDialogRef<DialogViewUserComponent>) {
        this.sourceService.getInstrumentAccessList(userId).subscribe(res => {
            dialogRef.componentInstance.data.access = [...res["users"]];
            console.log("FFF  ", [...res["users"]])
        });
    }

    onDeleteSource(userToDelete: any) {
        this.sourceService.deleteInstrument(userToDelete.id).subscribe(res => {
            this.getListInstruments();
        });
    }

    getListInstruments() {
        this.sourcesSubscription = this.sourceService.getInstrumentList(this.currentPage, this.itemsPerPage).subscribe(res => {
            if (res && res["data"]) {
                this.instrumentsList = res["data"]
                this.totalItems = res.totalCount;
            }
        })
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
        console.log("WE forte che mi hai cliccato")
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getListInstruments();
    }

    // END MERCHANT FUNCTIONS


    // BEGIN STATS FUNCTIONS
    openStats() {
        this.router.navigateByUrl("user/stats/admin")
    }

    // END STATS FUNCTIONS
}
