import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {Merchant} from '../../../_models';
import {first} from 'rxjs/operators';
import {UntypedFormGroup} from '@angular/forms';
import {MerchantService} from '../../../_services';
import {DialogType} from '../../../_models/dialogType';
import {StorageService} from "../../../_services/storage.service";
import {MerchantFormComponent} from "../../../_forms/merchant/forms-merchant.directive";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-merchant-dialog',
    templateUrl: 'add-merchant.component.html',
    styleUrls: ['add-merchant.component.css']
})
export class AddMerchantDialogComponent implements OnInit {
    formMerchant: UntypedFormGroup;
    formInputError: boolean;
    formApiError: boolean;
    dialogTypes = DialogType;
    merchantData: Merchant;

    constructor(@Inject(MAT_DIALOG_DATA) public data: MerchantDialogData,
                public dialogRef: MatDialogRef<AddMerchantDialogComponent>,
                private merchantService: MerchantService,
                private cd: ChangeDetectorRef,
                private storageService: StorageService) {
    }

    ngOnInit(): any {
        this.merchantData = this.data.data;
        this.cd.detectChanges();
    }

    onSubmit(): any {
        if (this.formMerchant.invalid) {
            for (const control of Object.keys(this.formMerchant.controls)) {
                this.formMerchant.controls[control].markAsTouched();
            }
        } else {
            switch (this.data.type) {
                case DialogType.create:
                    this.create();
                    break;
                case DialogType.edit:
                    this.edit();
                    break;
            }
        }
    }

    onCancel(): any {
        this.storageService.clear(this.storageService.merchantFormKey);
    }

    create(): any {
        const merchant = this.createMerchantDataStruct();
        this.merchantService.register(merchant).pipe(first()).subscribe(
            result => {
                this.dialogRef.close(true);
                this.storageService.clear(this.storageService.merchantFormKey);
            }, error => {
                this.formApiError = true;
                console.log(error);
            });
    }

    edit(): any {
        const merchant = this.createMerchantDataStruct();
        merchant.id = this.merchantData.id;
        this.merchantService.update(merchant).pipe(first()).subscribe(
            result => {
                this.dialogRef.close(true);
                this.storageService.clear(this.storageService.merchantFormKey);
            }, error => {
                this.formApiError = true;
                console.log(error);
            });
    }

    createMerchantDataStruct(): Merchant {
        this.formInputError = this.formMerchant === undefined;
        const merchant: Merchant = new Merchant();
        merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
        merchant.country = this.formMerchant.controls.country.value;
        merchant.city = this.formMerchant.controls.city.value;
        merchant.zipCode = this.formMerchant.controls.cap.value;
        merchant.address = this.formMerchant.controls.address.value;
        merchant.primaryActivity = this.formMerchant.controls.primaryActivity.value;
        merchant.name = this.formMerchant.controls.name.value;
        // Optional values
        if (this.formMerchant.controls.url.value !== '') {
            merchant.url = this.formMerchant.controls.url.value;
        }
        if (this.formMerchant.controls.description.value !== '') {
            merchant.description = this.formMerchant.controls.description.value;
        }
        return merchant;
    }
}

export class MerchantDialogData {
    type: DialogType;
    data: Merchant;
}
