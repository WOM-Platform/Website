import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import {
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from "@angular/forms";
import MapTypeId = google.maps.MapTypeId;
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {LatLon, Pos} from "../../_models";
import {debounceTime, switchMap, takeUntil} from "rxjs/operators";
import {StorageService} from "../../_services/storage.service";
import {Observable, Subject, Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInput} from "@angular/material/input";

@Component({
    selector: "app-forms-pos",
    templateUrl: "./forms-pos.directive.html",
    standalone: true,
    imports: [TranslateModule, MatFormFieldModule, ReactiveFormsModule, MatCheckboxModule, GoogleMapsModule, MatInput],
    styleUrls: ["./forms-pos.directive.css", "../forms.directive.css"],
})
export class PosFormComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(GoogleMap, {static: false}) map: GoogleMap;
    @ViewChild("mapSearchField") searchField: ElementRef;

    unsubscribe = new Subject<void>();

    posLon: string;
    posLat: string;
    isActive: boolean;
    marker: google.maps.Marker;
    options: google.maps.MapOptions = {
        center: {lat: 45.788, lng: 12.5},
        zoom: 5,
        mapTypeId: MapTypeId.ROADMAP,
    };

    @Input() form: UntypedFormGroup;
    @Input() pos: Pos;
    @Output() formChange = new EventEmitter<UntypedFormGroup>();

    constructor(
        private fb: UntypedFormBuilder,
        private storageService: StorageService
    ) {
    }

    ngOnInit(): any {
        this.form = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(4)]],
            latitude: [0, [Validators.required, this.latLonValidator]],
            longitude: [0, [Validators.required, this.latLonValidator]],
            url: [""],
            isActive: [
                this.pos !== undefined && this.pos !== null ? this.pos.isActive : true,
                ,
            ],
        });

        this.form
            .get("name")
            .valueChanges.subscribe((value) => this.formChange.emit(this.form));
        this.form
            .get("latitude")
            .valueChanges.subscribe((value) => this.formChange.emit(this.form));
        this.form
            .get("longitude")
            .valueChanges.subscribe((value) => this.formChange.emit(this.form));
        this.form
            .get("url")
            .valueChanges.subscribe((value) => this.formChange.emit(this.form));
        this.form
            .get("isActive")
            .valueChanges.subscribe((value) => this.formChange.emit(this.form));

        if (this.pos) {
            this.form.controls.name.setValue(this.pos.name);
            this.form.controls.latitude.setValue(this.pos.latitude);
            this.form.controls.longitude.setValue(this.pos.longitude);
            this.form.controls.url.setValue(this.pos.url);
            this.form.controls.isActive.setValue(this.pos.isActive);

            this.posLat = this.pos.latitude.toFixed(5);
            this.posLon = this.pos.longitude.toFixed(5);
            this.isActive = this.pos.isActive ? this.pos.isActive : true;
        } else {
            // Load from local storage if available
            const localData = this.storageService.load(
                this.storageService.posFormKey
            );
            if (localData) {
                console.log(localData);
                this.form.controls.name.setValue(localData.name ?? "");
                this.form.controls.latitude.setValue(localData.latitude ?? "");
                this.form.controls.longitude.setValue(localData.longitude ?? "");
                this.form.controls.url.setValue(localData.url ?? "");
                this.form.controls.isActive.setValue(localData.isActive ?? "");

                this.posLat = localData.latitude ? localData.latitude : "";
                this.posLon = localData.longitude ? localData.longitude.toFixed(5) : "";
                this.isActive = localData.isActive ? localData.isActive : true;
            }

            this.form.valueChanges
                .pipe(
                    debounceTime(500),
                    switchMap(async (formValue) => {
                        this.storageService.save(formValue, this.storageService.posFormKey);
                    }),
                    takeUntil(this.unsubscribe)
                )
                .subscribe(() => {
                });
        }
    }

    ngAfterViewInit() {
        const searchBox = new google.maps.places.SearchBox(
            this.searchField.nativeElement
        );

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            if (!google) return;

            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    return;
                }
                if (place.geometry.viewport) {
                    // Only geocodes have viewport
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
                this.setMarker(place.geometry.location);
            });
            this.map.fitBounds(bounds);
        });

        var latLng: google.maps.LatLng;
        if (this.pos) {
            latLng = new google.maps.LatLng(this.pos.latitude, this.pos.longitude);
        } else if (this.storageService.load(this.storageService.posFormKey)) {
            const localData = this.storageService.load(
                this.storageService.posFormKey
            );
            latLng = new google.maps.LatLng(localData.latitude, localData.longitude);
        } else {
            return;
        }

        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: latLng,
                map: this.map.googleMap,
                draggable: true,
            });
            google.maps.event.addListener(this.marker, "dragend", (evt) => {
                this.markerLocation();
            });
        } else {
            this.marker.setPosition(latLng);
        }
        this.markerLocation();
    }

    latLonValidator(control) {
        const value = control.value;
        if (value !== 0) {
            return null; // Value is valid
        } else {
            return {nonZero: true}; // Value is not valid
        }
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
            google.maps.event.addListener(this.marker, "dragend", (evt) => {
                this.markerLocation();
            });
        } else {
            this.marker.setPosition(latLng);
        }
        this.markerLocation();
    }

    markerLocation(): any {
        const currentLocation = this.marker.getPosition();
        this.form.controls.latitude.setValue(currentLocation.lat());
        this.form.controls.longitude.setValue(currentLocation.lng());

        this.posLat = currentLocation.lat().toFixed(5);
        this.posLon = currentLocation.lng().toFixed(5);
    }

    onIsActiveChanged(event) {
        this.pos.isActive = this.isActive;
    }

    ngOnDestroy() {
        this.unsubscribe.next();
    }
}
