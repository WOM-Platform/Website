import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
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
import {MerchantService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {UserMerchantComponent} from "../../merchant/user-merchant.component";

@Component({
    selector: 'app-merchants-tab',
    standalone: true,
    imports: [
        MatIcon,
        AdminTableComponent,
        UserMerchantComponent,
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

    currentPage: number = 1;
    itemsPerPage: string = '10';
    pageCount: number;
    totalItems: number;

    formApiError: boolean;

    constructor(public matDialog: MatDialog,
                private merchantService: MerchantService,
                private cd: ChangeDetectorRef,
                private storageService: StorageService) {
    }

    getMerchantsList() {
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(merchant => {
            console.log("create close ", merchant)
            if (merchant) {
                this.merchantService.register(merchant).pipe(first()).subscribe(
                    result => {
                        this.storageService.clear(this.storageService.merchantFormKey);
                    }, error => {
                        this.formApiError = true;
                        console.log(error);
                    });
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
        /*    this.merchantService.update(merchant).pipe(first()).subscribe(
                result => {
                    this.storageService.clear(this.storageService.merchantFormKey);
                }, error => {
                    this.formApiError = true;
                    console.log(error);
                });*/
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getMerchantsList();
    }
}
