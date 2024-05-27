import { Component, OnInit } from "@angular/core";
import { Merchant, Merchants, Pos } from "src/app/_models";
import { StorageService } from "src/app/_services/storage.service";
import {
  AddPosDialogComponent,
  PosDialogData,
} from "../dialog-create-pos/add-pos.component";
import { Subscription, first } from "rxjs";
import { DialogType } from "src/app/_models/dialogType";
import { EmailData } from "src/app/_models/emailData";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import { DialogConfirmComponent } from "src/app/components/dialog-confirm/dialog-confirm";
import { environment } from "src/environments/environment";
import {
  MerchantDialogData,
  DialogCreateMerchant,
} from "../dialog-create-merchant/dialog-create-merchant.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MerchantService, UserService } from "src/app/_services";
import { EmailService } from "src/app/_services/email.service";

@Component({
  selector: "app-my-merchants-collection",
  templateUrl: "./my-merchants-collection.component.html",
  styleUrl: "./my-merchants-collection.component.css",
})
export class MyMerchantsCollectionComponent implements OnInit {
  merchants: Merchants;
  subscriptions: Subscription;

  constructor(
    private emailService: EmailService,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private snackBar: MatSnackBar,
    private storageService: StorageService,
    private translate: TranslateService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): any {
    this.merchants = this.storageService.load("merchantData");
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
    const dialogRef = this.matDialog.open(AddPosDialogComponent, {
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
    merchantDialogData.isAdmin = false;

    const dialogRef = this.matDialog.open(DialogCreateMerchant, {
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

        this.updateMerchantsList();
      }
    });
  }

  updateMerchantsList() {
    this.userService.me().subscribe((user) => {
      this.loadData();
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
          const dialogRef = this.matDialog.open(DialogCreateMerchant, {
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
            this.updateMerchantsList();
          });
        this.subscriptions.add(delSub);
      }
    });
  }

  requestEnabling(merchant: Merchant) {
    const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
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
            const dialogRefErr = this.matDialog.open(DialogConfirmComponent, {
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
}
