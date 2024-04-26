import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService, UserService,} from '../../_services';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {UserMe} from "../../_models";

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit, OnDestroy {
    username: string;
    userData: any;
    userDataSubscription: Subscription;
    role: Set<string> = new Set<string>()

    constructor(
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private userService: UserService,
        private router: Router,
        private translate: TranslateService) {
    }

    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' + this.userService.currentUserValue.surname;
        this.loadData();
    }

    ngOnDestroy(): any {
        this.userDataSubscription.unsubscribe()
    }

    loadData(): any {
        // check user instrument and merchant amount
        this.userDataSubscription = this.userService.me().subscribe((data: UserMe) => {
            if (data) {
                console.log("data sup ", data)
                this.userData = data
                if (data.role) {
                    this.role.add(data.role)
                }
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


}
