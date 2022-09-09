import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService, } from '../../_services';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit, OnDestroy {
    username: string;

    constructor(public dialog: MatDialog,
                private snackBar: MatSnackBar,
                private userService: UserService,
                private router: Router,
                private translate: TranslateService) {
    }

    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' +   this.userService.currentUserValue.surname;
        this.loadData();
    }

    ngOnDestroy(): any {
    }

    loadData(): any {

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
