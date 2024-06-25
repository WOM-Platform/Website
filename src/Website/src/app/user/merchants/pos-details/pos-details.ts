import {Component, OnInit} from "@angular/core";
import {Pos, PosRegistration} from "../../../_models";
import {first, map} from "rxjs/operators";
import {UntypedFormGroup} from "@angular/forms";
import {PosService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {decodeBlurHash} from "../../../utils/blurhash-utils";
import {UploadImageComponent} from "../../../components/upload-image/upload-image.component";
import {CommonModule, Location} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PosFormComponent} from "../../../_forms/pos/forms-pos.directive";
import {ActivatedRoute} from "@angular/router";
import {OffersComponent} from "./offers/offers.component";
import {forkJoin} from "rxjs";

@Component({
    selector: "app-pos-details",
    standalone: true,
    imports: [CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        TranslateModule, PosFormComponent, OffersComponent,
    ],
    templateUrl: "pos-details.html",
    styleUrls: ["pos-details.css"],
})
export class PosDetailsComponent implements OnInit {
    formPos: UntypedFormGroup;
    formInputError: boolean;
    formApiError: boolean;

    posId: string
    pos: Pos
    action: string

    data

    placeholderSrc: string
    imageLoaded: boolean = false;

    constructor(
        private location: Location,
        private matDialog: MatDialog,
        private posService: PosService,
        private route: ActivatedRoute,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.loadData()
    }

    loadData() {
        this.route.paramMap.subscribe(params => {
            this.posId = params.get("posId");
            this.action = params.get("posAction");

            this.posService.get(this.posId).subscribe({
                next: (pos: Pos) => {
                    this.pos = pos;
                    this.placeholderSrc = decodeBlurHash(this.pos.cover.blurHash, 32, 32);
                    this.preloadImage(this.pos.cover.fullSizeUrl);
                },
                error: (err) => {
                    console.error('Error fetching data', err);
                }
            });
        });
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
            if (this.action === 'edit') {
                this.edit();
            } else {
                this.create();
            }
        }
    }

    onCancel(): any {
        this.storageService.clear(this.storageService.merchantFormKey);
    }

    goBack(): void {
        this.location.back();
    }

    edit() {
        this.pos.longitude = this.formPos.controls.longitude.value;
        this.pos.latitude = this.formPos.controls.latitude.value;
        this.pos.name = this.formPos.controls.name.value;
        this.pos.isActive = this.formPos.controls.isActive.value;

        // Optional values
        if (this.formPos.controls.url.value !== "") {
            this.pos.url = this.formPos.controls.url.value;
        }

        this.posService
            .update(this.pos)
            .pipe(first())
            .subscribe({
                next: () => {
                    /*this.dialogRef.close(true);*/
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
                        /*this.dialogRef.close(true);*/
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
        const dialogRef = this.matDialog.open(UploadImageComponent, {
            data: this.pos.id
        })

        dialogRef.afterClosed().subscribe({
            next: (res) => {
                if (res) {
                    this.loadData()
                }
            }
        })
    }

}

export class PosDialogData {
    merchantId: string;
    isEdit: boolean;
    pos: Pos;
}

