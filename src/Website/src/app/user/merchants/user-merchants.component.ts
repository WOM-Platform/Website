import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../_services";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "../../_services/storage.service";
import { Subscription } from "rxjs";
import { MatTabGroup } from "@angular/material/tabs";

@Component({
  selector: "app-user-merchant",
  templateUrl: "./user-merchants.component.html",
  styleUrls: ["./user-merchants.component.css"],
  standalone: false,
})
export class UserMerchantsComponent implements OnInit, OnDestroy {
  username: string;

  currentUser: any;
  @ViewChild("tabGroup", { static: true }) tabGroup!: MatTabGroup;

  subscriptions: Subscription;

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): any {
    this.route.queryParams.subscribe((params) => {
      const selectedTabIndex = params["selectedTabIndex"];
      if (selectedTabIndex !== undefined) {
        this.tabGroup.selectedIndex = selectedTabIndex;
      }
    });

    this.username =
      this.userService.currentUserValue.name +
      " " +
      this.userService.currentUserValue.surname;
    this.loadData();
  }

  ngOnDestroy(): any {}

  loadData(): any {
    this.currentUser = this.storageService.load("currentUser");
  }

  async navigateToSecondTab(): Promise<void> {
    if (this.tabGroup) {
      this.tabGroup.selectedIndex = 1;
    }
  }

  openSnackBar(message = "null"): any {
    this.snackBar.open(message, null, {
      duration: 5000,
    });
  }

  openStats(id: any) {
    this.router.navigateByUrl(`/user/stats/merchant/${id}`);
  }
}
