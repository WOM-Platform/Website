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
    isLoading = false

    merchantsTableColumns: string[] = ['name', 'email']


    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.merchantsList = this.getListMerchants();
    }

    ngOnDestroy() {

    }

    onLoading(loading) {
        this.isLoading = loading
    }

    // BEGIN SOURCE FUNCTIONS

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
