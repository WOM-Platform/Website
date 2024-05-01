import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

import {UserService} from "../_services";
import {UserMe} from "../_models";
import {Subscription} from "rxjs";
import {LoadingService} from "../_services/loading.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
    username: string;
    role: Set<string> = new Set<string>()
    userData: any;

    userDataSubscription: Subscription;
    isLoading = false

    navLinks = [
        {path: '/user/home', text: 'Home', icon: 'fa-solid fa-house'},
        {path: '/user/merchants', text: 'Merchants', icon: 'fa-solid fa-shop'},
        {path: '/user/instruments', text: 'Instruments', icon: 'fa-solid fa-coins'},
        {path: '/user/aims', text: 'Aims', icon: 'fa-solid fa-bullseye'},
        {path: '/user/users', text: 'Users', icon: 'fas fa-users'},
        {path: '/user/statistics', text: 'Statistics', icon: 'fa-solid fa-chart-simple'}
    ];

    constructor(
        private userService: UserService,
        private router: Router,
        private loadingService: LoadingService
    ) {
        this.userDataSubscription = this.loadingService.loadingStatus.subscribe(status => {
            this.isLoading = status;
        });
    }


    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' + this.userService.currentUserValue.surname;
        this.loadData()
    }

    ngOnDestroy() {
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

    onLoading(loading) {
        this.isLoading = loading
    }

}
