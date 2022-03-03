import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {Merchant, Merchants} from '../../_models';
import {MerchantService} from '../../_services/merchant.service';
import {AuthService} from '../../_services';
import {MatDialog} from '@angular/material/dialog';
import {AddMerchantDialogComponent, MerchantDialogData} from '../add-merchant/add-merchant.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {first} from 'rxjs/operators';
import {AddPosDialogComponent, PosDialogData} from '../add-pos/add-pos.component';
import {DialogType} from '../../_models/dialogType';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit, OnDestroy {
    username: string;
    merchants: Merchants;
    merchantSubscription: Subscription;

    constructor(public dialog: MatDialog,
                private snackBar: MatSnackBar,
                private userService: UserService,
                private merchantService: MerchantService,
                private authService: AuthService,
                private translate: TranslateService) {
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
            }, error => {
                console.log(error);
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

    addPos(merchantId: string): any {
        const posData = new PosDialogData();
        posData.merchantId = merchantId;
        posData.isEdit = false;

        this.openPosDialog(posData);
    }

    editPos(merchantId: string, posId: string): void {
        const posData = new PosDialogData();
        posData.merchantId = merchantId;
        posData.posId = posId;
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
                this.translate.get('USER.ADD_POS.SUCCESS').pipe(first()).subscribe(
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

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 2000
        });
    }
}
