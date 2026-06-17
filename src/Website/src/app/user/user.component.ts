import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Subscription } from "rxjs";
import { LoadingService } from "../_services/loading.service";
import { UserMe } from "../_models/user";
import { Instrument } from "../_models/instrument";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserComponent implements OnInit, OnDestroy {
  username: string = "";
  role: string = "";
  userData: UserMe = {
    email: "",
    id: "",
    merchants: [],
    name: "",
    surname: "",
    role: "",
    sources: [],
    verified: false,
    token: "",
  };

  userDataSubscription: Subscription = new Subscription();
  isLoading: boolean = false;
  instruments: Instrument[] = [];

  navLinks = [
    {
      path: "/user/home",
      text: "Home",
      icon: "home",
      isActive: true,
      adminOnly: false,
    },
    {
      path: "/user/merchants",
      text: "Merchants",
      icon: "storefront",
      isActive: true,
      adminOnly: false,
    },
    {
      path: "/user/instruments",
      text: "Instruments",
      icon: "toll",
      isActive: true,
      adminOnly: false,
    },
    {
      path: "/user/badges",
      text: "Badges",
      icon: "token",
      isActive: true,
      adminOnly: true,
    },
    {
      path: "/user/aims",
      text: "Aims",
      icon: "target",
      isActive: true,
      adminOnly: true,
    },
    {
      path: "/user/users",
      text: "Users",
      icon: "group",
      isActive: true,
      adminOnly: true,
    },
    {
      path: "/user/statistics",
      text: "Statistics",
      icon: "leaderboard",
      isActive: true,
      adminOnly: false,
    },
  ];
  filteredNavLinks: {
    path: string;
    text: string;
    icon: string;
    isActive: boolean;
    adminOnly: boolean;
  }[] = [];

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): any {
    this.userDataSubscription = this.loadingService.loadingStatus.subscribe(
      (status) => {
        this.isLoading = status;
        this.cd.detectChanges();
      }
    );

    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.username = `${user.name} ${user.surname}`;
        this.loadData();
      } else {
        console.warn("User null");
      }
    });
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
    this.filteredNavLinks = this.navLinks.filter((link) => {
      // if user is an admin or user
      if (link.adminOnly && this.role !== "Admin") {
        return false;
      }
      // remove statistics if user has no merchant and no sources
      if (
        link.path === "/user/statistics" &&
        this.userData.merchants.length <= 0 &&
        this.userData.sources.length <= 0
      ) {
        return false;
      }
      // if user role is user than check if they have sources
      return !(
        link.path === "/user/instruments" &&
        this.role === "User" &&
        this.userData.sources.length === 0
      );
    });
  }

  onLoading(loading: boolean): void {
    this.isLoading = loading;
  }
}
