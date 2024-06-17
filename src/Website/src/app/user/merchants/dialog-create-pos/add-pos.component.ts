import {Component, Inject, OnInit} from "@angular/core";
import {Pos, PosRegistration} from "../../../_models";
import {first} from "rxjs/operators";
import {UntypedFormGroup} from "@angular/forms";
import {PosService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {decodeBlurHash} from "../../../utils/blurhash-utils";
import {UploadImageComponent} from "../../../components/upload-image/upload-image.component";
import {data} from "autoprefixer";

@Component({
    selector: "app-pos-dialog",
    templateUrl: "add-pos.component.html",
    styleUrls: ["add-pos.component.css"],
})
export class AddPosDialogComponent implements OnInit {
    formPos: UntypedFormGroup;
    formInputError: boolean;
    formApiError: boolean;

    placeholderSrc: string
    imageLoaded: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PosDialogData,
        public dialogRef: MatDialogRef<AddPosDialogComponent>,
        private matDialog: MatDialog,
        private posService: PosService,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.placeholderSrc = decodeBlurHash(this.data.pos.cover.blurHash, 32, 32);
        this.preloadImage(this.data.pos.cover.fullSizeUrl);
        console.log(this.data.pos.cover.fullSizeUrl)
    }

    preloadImage(url: string) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            this.imageLoaded = true;
        };
    }

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
            .subscribe({
                next: () => {
                    this.dialogRef.close(true);
                    this.storageService.clear(this.storageService.posFormKey);
                },
                error: (error) => {
                    this.formApiError = true;
                    console.log(error);
                }
            });
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
            .subscribe({
                    next: () => {
                        this.dialogRef.close(true);
                        this.storageService.clear(this.storageService.posFormKey);
                    },
                    error: (error) => {
                        this.formApiError = true;
                        console.log(error);
                    }
                }
            );
    }

    editCoverImage() {
        this.matDialog.open(UploadImageComponent, {
            data: this.data.pos.id
        })
    }

}

export class PosDialogData {
    merchantId: string;
    isEdit: boolean;
    pos: Pos;
}
