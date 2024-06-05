import {
    ChangeDetectorRef,
    Component,
    Inject,
    OnInit,
    Output,
} from "@angular/core";
import {Merchant} from "../../../_models";
import {first} from "rxjs/operators";
import {UntypedFormGroup} from "@angular/forms";
import {MerchantService} from "../../../_services";
import {DialogType} from "../../../_models/dialogType";
import {StorageService} from "../../../_services/storage.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-form-merchant-dialog",
    templateUrl: "dialog-create-merchant.html",
    styleUrls: ["dialog-create-merchant.css"],
})
export class DialogCreateMerchant implements OnInit {
    formMerchant: UntypedFormGroup;
    formInputError: boolean;
    formApiError: boolean;
    dialogTypes = DialogType;
    merchantData: Merchant;

    isAdmin: boolean;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: MerchantDialogData,
        public dialogRef: MatDialogRef<DialogCreateMerchant>,
        private merchantService: MerchantService,
        private cd: ChangeDetectorRef,
        private storageService: StorageService
    ) {
    }

    ngOnInit(): any {
        this.merchantData = this.data.data;
        this.isAdmin = this.data.isAdmin;

        this.cd.detectChanges();
    }

    onSubmit(): any {
        if (this.formMerchant.invalid) {
            this.formMerchant.markAsTouched();
            return;
        } else {
            this.data.type === DialogType.create ? this.create() : this.edit();
        }
    }

    onCancel(): any {
        this.storageService.clear(this.storageService.merchantFormKey);
    }

    create(): any {
        const merchant = this.createMerchantDataStruct();
        this.dialogRef.close(merchant);
    }

    edit(): any {
        const merchant = this.createMerchantDataStruct();
        merchant.id = this.merchantData.id;
        this.dialogRef.close(merchant);
        this.merchantService
            .update(merchant)
            .pipe(first())
            .subscribe(
                (result) => {
                    this.dialogRef.close(true);
                    this.storageService.clear(this.storageService.merchantFormKey);
                },
                (error) => {
                    this.formApiError = true;
                    console.error(error);
                }
            );
    }

    createMerchantDataStruct(): Merchant {
        this.formInputError = this.formMerchant === undefined;
        const merchant: Merchant = new Merchant();
        merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
        merchant.country = this.formMerchant.controls.country.value;
        merchant.city = this.formMerchant.controls.city.value;
        merchant.zipCode = this.formMerchant.controls.zipCode.value;
        merchant.address = this.formMerchant.controls.address.value;
        merchant.primaryActivity = this.formMerchant.controls.primaryActivity.value;
        merchant.name = this.formMerchant.controls.name.value;
        merchant.enabled = this.formMerchant.controls.enabled.value;
        // Optional values
        if (this.formMerchant.controls.url.value !== "") {
            merchant.url = this.formMerchant.controls.url.value;
        }
        if (this.formMerchant.controls.description.value !== "") {
            merchant.description = this.formMerchant.controls.description.value;
        }
        return merchant;
    }
}

export class MerchantDialogData {
    type: DialogType;
    data: Merchant;
    isAdmin?: boolean;
}
