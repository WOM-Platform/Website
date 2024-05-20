import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService, MerchantService, AuthService } from "../../_services";
import { Merchant, Merchants, Pos } from "../../_models";
import {
  DialogCreateMerchant,
  MerchantDialogData,
} from "../components/dialog-create-merchant/dialog-create-merchant";
import { TranslateService } from "@ngx-translate/core";
import { first } from "rxjs/operators";
import {
  AddPosDialogComponent,
  PosDialogData,
} from "../components/dialog-create-pos/add-pos.component";
import { DialogType } from "../../_models/dialogType";
import { EmailService } from "../../_services/email.service";
import { EmailData } from "../../_models/emailData";
import { environment } from "../../../environments/environment";
import { DialogConfirmCancelComponent } from "../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { DialogConfirmComponent } from "../../components/dialog-confirm/dialog-confirm";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { StorageService } from "../../_services/storage.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-merchant",
  templateUrl: "./user-merchants.component.html",
  styleUrls: ["./user-merchants.component.css"],
})
export class UserMerchantsComponent implements OnInit, OnDestroy {
  username: string;
  merchants: Merchants;
  currentUser: any;

  subscriptions: Subscription;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private emailService: EmailService,
    private storageService: StorageService,
    private router: Router,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private userService: UserService
  ) {}

  ngOnInit(): any {
    this.username =
      this.userService.currentUserValue.name +
      " " +
      this.userService.currentUserValue.surname;
    this.loadData();
  }

  ngOnDestroy(): any {}

  loadData(): any {
    this.merchants = this.storageService.load("merchantData");
    this.currentUser = this.storageService.load("currentUser");
  }

<<<<<<< HEAD
  updataMerchantsList() {
    this.userService.me().subscribe((user) => {
=======
  updateMerchantsList() {
    this.userService.me().subscribe((user) => {
      console.log("I miei merchant ", user);
>>>>>>> feature/dashboardInstrument
      this.loadData();
    });
  }

  addPos(merchantId: string): any {
    const posData = new PosDialogData();
    posData.merchantId = merchantId;
    posData.isEdit = false;
    posData.pos = null;

    this.openPosDialog(posData);
  }

  editPos(merchantId: string, pos: Pos): void {
    const posData = new PosDialogData();
    posData.merchantId = merchantId;
    posData.pos = pos;
    posData.isEdit = true;
    this.openPosDialog(posData);
  }

  openPosDialog(posData: PosDialogData): void {
    const dialogRef = this.dialog.open(AddPosDialogComponent, {
      data: posData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadData();
        let successString;
        if (posData.isEdit) {
          successString = "USER.EDIT_POS.SUCCESS";
        } else {
          successString = "USER.ADD_POS.SUCCESS";
        }
        this.translate
          .get(successString)
          .pipe(first())
          .subscribe((response) => {
            this.openSnackBar(response);
          });
      }
    });
  }

  addMerchant(): any {
    const merchantDialogData = new MerchantDialogData();
    merchantDialogData.data = null;
    merchantDialogData.type = DialogType.create;
    const dialogRef = this.dialog.open(DialogCreateMerchant, {
      data: merchantDialogData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadData();
        this.translate
          .get("USER.ADD_MERCHANT.SUCCESS")
          .pipe(first())
          .subscribe((response) => {
            this.openSnackBar(response);
          });

<<<<<<< HEAD
        this.updataMerchantsList();
=======
        this.updateMerchantsList();
>>>>>>> feature/dashboardInstrument
      }
    });
  }

  editMerchant(merchant: Merchant): any {
    const merchantDialogData = new MerchantDialogData();
    merchantDialogData.data = merchant;
    merchantDialogData.type = DialogType.edit;
    const accessListSub = this.merchantService
      .getAccessList(merchant.id)
      .subscribe({
        next: (res) => {
          const dialogRef = this.dialog.open(DialogCreateMerchant, {
            data: merchantDialogData,
          });
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.loadData();
              this.translate
                .get("USER.EDIT_MERCHANT.SUCCESS")
                .pipe(first())
                .subscribe((response) => {
                  this.openSnackBar(response);
                });
            }
          });
        },
      });
  }

  onDeleteMerchant(merchant: Merchant) {
    const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
      width: "500px",
      data: {
        title: "Conferma eliminazione",
        message: "Sei sicuro di voler confermare l'eliminazione?",
        confirm: "si",
        cancel: "Annulla",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const delSub = this.merchantService
          .deleteMerchant(merchant.id)
          .subscribe((res) => {
<<<<<<< HEAD
            this.updataMerchantsList();
=======
            this.updateMerchantsList();
>>>>>>> feature/dashboardInstrument
          });
        this.subscriptions.add(delSub);
      }
    });
  }

  requestEnabling(merchant: Merchant) {
    const dialogRef = this.dialog.open(DialogConfirmCancelComponent, {
      data: {
        title: this.translate.instant(
          "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.TITLE"
        ),
        message: this.translate.instant(
          "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.MESSAGE"
        ),
        confirm: this.translate.instant(
          "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CONFIRM"
        ),
        cancel: this.translate.instant(
          "USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CANCEL"
        ),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let emailData = new EmailData();
        emailData.senderEmail = environment.noreplyEmail;
        emailData.senderName =
          this.userService.currentUserValue.name +
          " " +
          this.userService.currentUserValue.surname;
        emailData.toEmail = environment.baseEmail;
        emailData.toName = "WOM Administrator";
        emailData.subject = "WOM Merchant request #" + merchant.id;
        emailData.content =
          "Request from " +
          this.userService.currentUserValue.email +
          "  for merchant " +
          "<br><b>id</b>: " +
          merchant.id +
          "<br><b>name:</b> " +
          merchant.name +
          "<br><b>fiscal code:</b> " +
          merchant.fiscalCode;

        this.emailService.sendEmail(emailData).subscribe(
          (res) => {
            this.openSnackBar(
              this.translate.instant(
                "USER.MERCHANT.MERCHANT.SEND_ACTIVATION_REQUEST_CONFIRM"
              )
            );
          },
          (error) => {
            console.error(error);
            const dialogRefErr = this.dialog.open(DialogConfirmComponent, {
              data: {
                title: this.translate.instant(
                  "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.TITLE"
                ),
                message: this.translate.instant(
                  "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.MESSAGE"
                ),
                confirm: this.translate.instant(
                  "USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.CONFIRM"
                ),
              },
            });
            dialogRefErr.afterClosed().subscribe((result) => {});
          }
        );
      }
    });
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
