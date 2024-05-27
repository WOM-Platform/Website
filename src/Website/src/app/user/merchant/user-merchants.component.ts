import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { UserService, MerchantService, AuthService } from "../../_services";
import { Merchant, Merchants, Pos } from "../../_models";
import {
  DialogCreateMerchant,
  MerchantDialogData,
} from "./dialog-create-merchant/dialog-create-merchant.component";
import { TranslateService } from "@ngx-translate/core";
import { first } from "rxjs/operators";
import {
  AddPosDialogComponent,
  PosDialogData,
} from "./dialog-create-pos/add-pos.component";
import { DialogType } from "../../_models/dialogType";
import { EmailService } from "../../_services/email.service";
import { EmailData } from "../../_models/emailData";
import { environment } from "../../../environments/environment";
import { DialogConfirmCancelComponent } from "../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { DialogConfirmComponent } from "../../components/dialog-confirm/dialog-confirm";
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
})
export class UserMerchantsComponent implements OnInit, OnDestroy {
  username: string;

  currentUser: any;
  @ViewChild("tabGroup", { static: true }) tabGroup!: MatTabGroup;

  subscriptions: Subscription;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private emailService: EmailService,
    private storageService: StorageService,
    private router: Router,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
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
