import {Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "../../_services";
import {TranslateService} from "@ngx-translate/core";
import {NavigationExtras, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {UserMe} from "../../_models";

@Component({
    selector: "app-user-home",
    templateUrl: "./user-home.component.html",
    styleUrls: ["./user-home.component.css"],
})
export class UserHomeComponent implements OnInit, OnDestroy {
    userData: any;
    userDataSubscription: Subscription;
    role: string = ""

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private snackBarService: MatSnackBar,
        private translate: TranslateService,
        private userService: UserService,
    ) {
    }

    ngOnInit(): any {
        this.loadData();
    }

    ngOnDestroy(): any {
        this.userDataSubscription.unsubscribe();
    }

    loadData(): any {
        // check user instrument and merchant amount
        this.userDataSubscription = this.userService
            .me()
            .subscribe({
                next: (data: UserMe) => {
                    if (data) {
                        this.userData = data;
                        this.role = data.role;
                    }

                }, error: (err) => {
                    this.snackBarService.open("errore caricamento dati utente")
                    console.error(err)
                }
            })
    }

    async navigate(link: string): Promise<void> {
        const navigationExtra: NavigationExtras = {
            queryParams: {selectedTabIndex: 1},
        };
        await this.router.navigate(["/" + link], navigationExtra);
    }
}
