import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SourceService} from "../../_services/source.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class UserAdminComponent {
    @Input() user: any;
    isLoading = false
    merchantsTableColumns: string[] = ['name', 'email']
    activeTabIndex: number = 0;  // Default to the first tab

    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    onLoading(loading) {
        this.isLoading = loading
    }

    onTabChange(index: number): void {
        this.activeTabIndex = index;
    }

    openStats() {
        this.router.navigateByUrl("user/stats/admin")
    }
}

/*

import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService, UserService,} from '../../_services';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {UserMe} from "../../_models";
import {SourceService} from "../../_services/source.service";

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit, OnDestroy {
    username: string;
    userData: any;
    userDataSubscription: Subscription;

    isLoading = false
    activeTabIndex: number = 0;  // Default to the first tab

    constructor(
        private cdr: ChangeDetectorRef,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private userService: UserService,
        private router: Router,
        private translate: TranslateService,
    ) {
    }

    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' + this.userService.currentUserValue.surname;
        this.loadData();
        this.cdr.detectChanges()
    }

    ngOnDestroy(): any {
        this.userDataSubscription.unsubscribe()
    }

    loadData(): any {
        // check user instrument and merchant amount
        this.userDataSubscription = this.userService.me().subscribe((data: UserMe) => {
            if (data) {

                this.userData = data
            }

        })
    }

    async navigate(link: string): Promise<void> {
        await this.router.navigate(['/' + link]);
    }

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 5000
        });
    }

    onLoading(loading) {
        this.isLoading = loading
        this.cdr.detectChanges()
    }

    onTabChange(index: number): void {
        this.activeTabIndex = index;
    }
}
*/
