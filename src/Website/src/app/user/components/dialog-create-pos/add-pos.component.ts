import { Component, Inject } from "@angular/core";
import { Pos, PosRegistration } from "../../../_models";
import { first } from "rxjs/operators";
import { UntypedFormGroup } from "@angular/forms";
import { PosService } from "../../../_services";
import { StorageService } from "../../../_services/storage.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-pos-dialog",
  templateUrl: "add-pos.component.html",
  styleUrls: ["add-pos.component.css"],
})
export class AddPosDialogComponent {
  formPos: UntypedFormGroup;
  formInputError: boolean;
  formApiError: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PosDialogData,
    public dialogRef: MatDialogRef<AddPosDialogComponent>,
    private posService: PosService,
    private storageService: StorageService
  ) {}

  onSubmit(): any {
    if (this.formPos.invalid) {
      for (const control of Object.keys(this.formPos.controls)) {
        this.formPos.controls[control].markAsTouched();
      }
    } else {
      this.formInputError = this.formPos === undefined;
      if (this.formPos.controls.latitude.value === 0) {
        this.formInputError = true;
        return;
      }
      if (this.data.isEdit) {
        this.edit();
      } else {
        this.create();
      }
    }
  }

  onCancel(): any {
    this.storageService.clear(this.storageService.merchantFormKey);
  }

  edit() {
    this.data.pos.longitude = this.formPos.controls.longitude.value;
    this.data.pos.latitude = this.formPos.controls.latitude.value;
    this.data.pos.name = this.formPos.controls.name.value;
    this.data.pos.isActive = this.formPos.controls.isActive.value;

    // Optional values
    if (this.formPos.controls.url.value !== "") {
      this.data.pos.url = this.formPos.controls.url.value;
    }

    this.posService
      .update(this.data.pos)
      .pipe(first())
      .subscribe(
        (result) => {
          this.dialogRef.close(true);
          this.storageService.clear(this.storageService.posFormKey);
        },
        (error) => {
          this.formApiError = true;
          console.log(error);
        }
      );
  }

  create() {
    const pos: PosRegistration = new PosRegistration();
    pos.longitude = this.formPos.controls.longitude.value;
    pos.latitude = this.formPos.controls.latitude.value;
    pos.name = this.formPos.controls.name.value;
    pos.ownerMerchantId = this.data.merchantId;

    // Optional values
    if (this.formPos.controls.url.value !== "") {
      pos.url = this.formPos.controls.url.value;
    }

    this.posService
      .register(pos)
      .pipe(first())
      .subscribe(
        (result) => {
          this.dialogRef.close(true);
          this.storageService.clear(this.storageService.posFormKey);
        },
        (error) => {
          this.formApiError = true;
          console.log(error);
        }
      );
  }
}

export class PosDialogData {
  merchantId: string;
  isEdit: boolean;
  pos: Pos;
}
