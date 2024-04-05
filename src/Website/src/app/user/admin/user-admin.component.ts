import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../_services";
import {SourceService} from "../../_services/source.service";
import {Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {CreateInstrumentDialogComponent} from "./create-instrument-dialog/create-instrument-dialog.component";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css']
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


    constructor(private router: Router, private sourceService: SourceService, private instrumentDialog: MatDialog) {
    }

    ngOnInit() {
        this.merchantsList = this.getListMerchants()
        this.getListInstruments()
    }

    openStats() {
        this.router.navigateByUrl("user/stats/admin")
    }

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

    getListInstruments() {
        this.sourcesSubscription = this.sourceService.getInstrumentList(this.currentPage, this.itemsPerPage).subscribe(res => {
            if (res && res["data"]) {
                this.instrumentsList = res["data"]
                this.totalItems = res.totalCount;

                console.log("Instruments  ", res)

            }

        })

    }

    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getListInstruments();
    }

    goToPreviousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getListInstruments();
        }
    }

    goToNextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.getListInstruments();
        }
    }

    goToPage(page: string): void {
        const pageNumber = parseInt(page, 10);
        if (pageNumber && pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
            this.currentPage = pageNumber;
            this.getListInstruments();
        }
    }

    onCreateInstrument() {
        const dialogRef = this.instrumentDialog.open(CreateInstrumentDialogComponent, {
            width: '500px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.name && result.url) {
                this.sourceService.createInstrument(result).subscribe(
                    res => {
                        this.getListInstruments();
                    },
                    error => {
                        console.error("Error creating instrument:", error);
                    }
                );
            } else {
                console.error("Invalid result received:", result);

            }
        });
    }

    onDeleteSource(userToDelete: any) {
        // Delete service
        this.sourceService.deleteInstrument(userToDelete.id).subscribe(res => {
            this.getListInstruments();
        })
    }

}
