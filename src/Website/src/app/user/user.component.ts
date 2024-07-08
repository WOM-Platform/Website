import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "../_services";
import {UserMe} from "../_models";
import {Subscription} from "rxjs";
import {LoadingService} from "../_services/loading.service";
import {Instrument} from "../_models/instrument";
import {StorageService} from "../_services/storage.service";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrl: "./user.component.css",
})
export class UserComponent implements OnInit, OnDestroy {
    username: string;
    role: string = ""
    userData: any;

    userDataSubscription: Subscription;
    isLoading = false;
    instruments: Instrument[] = []

    navLinks = [
        {
            path: "/user/home",
            text: "Home",
            icon: "fa-solid fa-house",
            isActive: true,
            adminOnly: false
        },
        {
            path: "/user/merchants",
            text: "Merchants",
            icon: "fa-solid fa-shop",
            isActive: true,
            adminOnly: false
        },
        {
            path: "/user/instruments",
            text: "Instruments",
            icon: "fa-solid fa-coins",
            isActive: true,
            adminOnly: false
        },
        {
            path: "/user/aims",
            text: "Aims",
            icon: "fa-solid fa-bullseye",
            isActive: true,
            adminOnly: true
        },
        {
            path: "/user/users",
            text: "Users",
            icon: "fas fa-users",
            isActive: true,
            adminOnly: true
        },
        {
            path: "/user/statistics",
            text: "Statistics",
            icon: "fa-solid fa-chart-simple",
            isActive: false,
            adminOnly: false
        },
    ];
    filteredNavLinks = [];

    constructor(
        private userService: UserService,
        private cd: ChangeDetectorRef,
        private loadingService: LoadingService,
        private storageService: StorageService
    ) {
    }

    ngOnInit(): any {
        this.userDataSubscription = this.loadingService.loadingStatus.subscribe(
            (status) => {
                this.isLoading = status;
                this.cd.detectChanges();
            }
        );

        const correntUser = this.storageService.load('currentUser')
        this.userData = `${correntUser.name} ${correntUser.surname}`;
        /*  this.username =
              this.userService.currentUserValue.name +
              " " +
              this.userService.currentUserValue.surname;*/
        this.loadData();

    }

    ngOnDestroy() {
        this.userDataSubscription.unsubscribe();
    }

    loadData(): any {
        // check user instrument and merchant amount
        this.userDataSubscription = this.userService
            .me()
            .subscribe((data: UserMe) => {
                if (data) {
                    this.userData = data;
                    this.role = data.role;
                    this.filterNavLinks();
                }

            });
    }

    // to filter navlink
    filterNavLinks() {
        this.filteredNavLinks = this.navLinks.filter(link => {
            // if user is an admin or user
            if (link.adminOnly && this.role !== 'Admin') {
                return false;
            }
            // if user role is user than check if they are instrument
            return !(link.path === '/user/instruments' && (this.role === 'User' && this.userData.sources.length === 0));
        });
    }

    onLoading(loading) {
        this.isLoading = loading;
    }
}
