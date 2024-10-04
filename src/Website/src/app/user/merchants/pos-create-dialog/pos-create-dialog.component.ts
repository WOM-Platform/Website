import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {PosService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {first} from "rxjs/operators";
import {Pos, PosRegistration} from "../../../_models";
import MapTypeId = google.maps.MapTypeId;
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {Subject} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInput} from "@angular/material/input";
import {EditableElementComponent} from "../../components/editable-element/editable-element.component";
import {NgIf} from "@angular/common";
import {OffersComponent} from "../pos-details/offers/offers.component";
import {CreateEditOfferComponent} from "../pos-details/offers/create-edit-offer/create-edit-offer.component";

@Component({
    selector: 'app-pos-create-dialog',
    templateUrl: './pos-create-dialog.component.html',
    styleUrl: './pos-create-dialog.component.css',
    standalone: true,
    imports: [OffersComponent, CreateEditOfferComponent, MatDialogModule, TranslateModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, MatTooltipModule, GoogleMapsModule, MatInput, EditableElementComponent, NgIf],
})
export class PosCreateDialogComponent implements OnInit {
    @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
    @ViewChild("mapSearchField") searchField: ElementRef;

    unsubscribe = new Subject<void>();
    isCeatingOffer: boolean = false

    marker: google.maps.Marker;
    options: google.maps.MapOptions = {
        center: {lat: 45.788, lng: 12.5},
        zoom: 5,
        mapTypeId: MapTypeId.ROADMAP,
    };
    newPos: FormGroup;
    formInputError: boolean;
    formApiError: boolean;

    firstFormGroup = this.fb.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this.fb.group({
        secondCtrl: ['', Validators.required],
    });
    isLinear = false;


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PosDialogData,
        public dialogRef: MatDialogRef<PosCreateDialogComponent>,
        private fb: FormBuilder,
        private posService: PosService,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.newPos = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(4)]],
            isActive: [false],
            url: [
                "",
                [
                    Validators.required,
                    Validators.pattern(
                        "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$"
                    ),
                    Validators.minLength(10),
                ],
            ],
            latitude: [0, [Validators.required, this.latLonValidator]],
            longitude: [0, [Validators.required, this.latLonValidator]],
            location: []
        });
    }

    latLonValidator(control) {
        const value = control.value;
        if (value !== 0) {
            return null; // Value is valid
        } else {
            return {nonZero: true}; // Value is not valid
        }
    }

    mapFiltered(bounds: any) {
        this.newPos.patchValue({location: bounds});
        /*this.emitFilterValues();*/
    }

    onSubmit(): any {
        if (this.newPos.invalid) {
            for (const control of Object.keys(this.newPos.controls)) {
                this.newPos.controls[control].markAsTouched();
            }
        } else {
            this.formInputError = this.newPos === undefined;
            if (this.newPos.controls.latitude.value === 0) {
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
        this.data.pos.longitude = this.newPos.controls.longitude.value;
        this.data.pos.latitude = this.newPos.controls.latitude.value;
        this.data.pos.name = this.newPos.controls.name.value;
        this.data.pos.isActive = this.newPos.controls.isActive.value;

        // Optional values
        if (this.newPos.controls.url.value !== "") {
            this.data.pos.url = this.newPos.controls.url.value;
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
                        console.error(error);
                    }
                }
            );
    }

    create() {
        const pos: PosRegistration = new PosRegistration();
        pos.longitude = this.newPos.controls.longitude.value;
        pos.latitude = this.newPos.controls.latitude.value;
        pos.name = this.newPos.controls.name.value;
        pos.ownerMerchantId = this.data.merchantId;

        // Optional values
        if (this.newPos.controls.url.value !== "") {
            pos.url = this.newPos.controls.url.value;
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
                    console.error(error);
                }
            });
    }

    mapClick(event): any {
        const clickedLocation = event.latLng;
        this.setMarker(clickedLocation);
    }

    setMarker(latLng: google.maps.LatLng): void {
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: latLng,
                map: this.map.googleMap,
                draggable: true,
            });
            google.maps.event.addListener(this.marker, "dragend", () => {
                this.markerLocation();
            });
        } else {
            this.marker.setPosition(latLng);
        }
        this.markerLocation();
    }

    markerLocation(): any {
        const currentLocation = this.marker.getPosition();

        this.newPos.controls.latitude.setValue(currentLocation.lat());
        this.newPos.controls.longitude.setValue(currentLocation.lng());
    }


}

export class PosDialogData {
    merchantId: string;
    isEdit: boolean;
    pos: Pos;
}
