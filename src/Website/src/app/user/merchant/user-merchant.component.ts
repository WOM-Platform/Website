import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService, MerchantService, AuthService} from '../../_services';
import {Merchant, Merchants, Pos} from '../../_models';
import {AddMerchantDialogComponent, MerchantDialogData} from '../add-merchant/add-merchant.component';
import {TranslateService} from '@ngx-translate/core';
import {first} from 'rxjs/operators';
import {AddPosDialogComponent, PosDialogData} from '../add-pos/add-pos.component';
import {DialogType} from '../../_models/dialogType';
import {Subscription} from 'rxjs';
import {EmailService} from "../../_services/email.service";
import {EmailData} from "../../_models/emailData";
import {environment} from "../../../environments/environment";
import {DialogConfirmCancelComponent} from "../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {DialogConfirmComponent} from "../../components/dialog-confirm/dialog-confirm";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-merchant',
    templateUrl: './user-merchant.component.html',
    styleUrls: ['./user-merchant.component.css']
})
export class UserMerchantComponent implements OnInit, OnDestroy {
    username: string;
    merchants: Merchants;
    merchantSubscription: Subscription;

    constructor(
        public dialog: MatDialog,
                private authService: AuthService,
                private emailService: EmailService,
                private router: Router,
                private snackBar: MatSnackBar,
                private translate: TranslateService,
                private userService: UserService,
                ) {
    }

    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' +   this.userService.currentUserValue.surname;
        this.loadData();
    }

    ngOnDestroy(): any {
        this.merchantSubscription.unsubscribe();
    }

    loadData(): any {
        this.merchantSubscription = this.authService.merchants().pipe().subscribe(
            response =>
            {
                this.merchants = response;
                // console.log(response);
            }, error => {
                // console.log(error);
                console.log('error downloading merchant data');
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
            data: posData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
                let successString;
                if(posData.isEdit) {
                    successString = 'USER.EDIT_POS.SUCCESS';
                }
                else {
                    successString = 'USER.ADD_POS.SUCCESS';
                }
                this.translate.get(successString).pipe(first()).subscribe(
                    response => {
                        this.openSnackBar(response);
                    });
            }
        });
    }

    addMerchant(): any {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        const dialogRef = this.dialog.open(AddMerchantDialogComponent, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
                this.translate.get('USER.ADD_MERCHANT.SUCCESS').pipe(first()).subscribe(
                    response => {
                        this.openSnackBar(response);
                    });
            }
        });
    }

    editMerchant(merchant: Merchant): any {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = merchant;
        merchantDialogData.type = DialogType.edit;
        const dialogRef = this.dialog.open(AddMerchantDialogComponent, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadData();
                this.translate.get('USER.EDIT_MERCHANT.SUCCESS').pipe(first()).subscribe(
                    response => {
                        this.openSnackBar(response);
                    });
            }
        });
    }

    requestEnabling(merchant: Merchant) {
        const dialogRef = this.dialog.open(DialogConfirmCancelComponent, {
            data: {
                'title': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.TITLE'),
                'message': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.MESSAGE'),
                'confirm': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CONFIRM'),
                'cancel': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_DIALOG.CANCEL')
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let emailData = new EmailData();
                emailData.senderEmail = environment.noreplyEmail;
                emailData.senderName = this.userService.currentUserValue.name + " " + this.userService.currentUserValue.surname;
                emailData.toEmail = environment.baseEmail;
                emailData.toName = 'WOM Administrator';
                emailData.subject = "WOM Merchant request #" + merchant.id;
                emailData.content = "Request from " + this.userService.currentUserValue.email + "  for merchant "
                    + "<br><b>id</b>: " + merchant.id
                    + "<br><b>name:</b> " + merchant.name
                    + "<br><b>fiscal code:</b> " + merchant.fiscalCode;

                this.emailService.sendEmail(emailData).subscribe(res => {
                    this.openSnackBar(this.translate.instant('USER.MERCHANT.MERCHANT.SEND_ACTIVATION_REQUEST_CONFIRM'));
                },
                error => {
                    console.log(error);
                    const dialogRefErr = this.dialog.open(DialogConfirmComponent, {
                        data: {
                            'title': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.TITLE'),
                            'message': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.MESSAGE'),
                            'confirm': this.translate.instant('USER.MERCHANT.MERCHANT.ACTIVATION_ERROR.CONFIRM'),
                        }
                    });
                    dialogRefErr.afterClosed().subscribe(result => {
                    });
                });
            }
        });
    }

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 5000
        });
    }

    openStats() {
        this.router.navigateByUrl("/user/user-stats")
    }
}
