import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
    DialogCreateMerchant,
    MerchantDialogData
} from "../../components/dialog-create-merchant/dialog-create-merchant";
import {DialogType} from "../../../_models/dialogType";
import {first} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {NgIf} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant} from "../../../_models";

@Component({
    selector: 'app-merchants-tab',
    standalone: true,
    imports: [
        MatIcon,
        AdminTableComponent,
        NgIf,
        SharedModule
    ],
    templateUrl: './merchants-tab.component.html',
    styleUrl: './merchants-tab.component.css'
})
export class MerchantsTabComponent {
    @Output() isLoading = new EventEmitter<boolean>()

    merchantsList
    merchantsTableColumns

    constructor(public matDialog: MatDialog,) {
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                /*  this.loadData();
                  this.translate.get('USER.ADD_MERCHANT.SUCCESS').pipe(first()).subscribe(
                      response => {
                          this.openSnackBar(response);
                      });*/
            }
        });
    }

    onViewMerchant(merchant: Merchant) {
    }

    onDeleteMerchant(merchant: Merchant) {
    }

    onEditMerchant(merchant: Merchant) {
    }
}
