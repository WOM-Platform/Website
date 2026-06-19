import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { GoogleMap, GoogleMapsModule } from "@angular/google-maps";
import { Pos } from "../../../../_models";
import { debounceTime, switchMap, takeUntil } from "rxjs/operators";
import { StorageService } from "../../../../_services/storage.service";
import { Subject } from "rxjs";
import { TranslateModule } from "@ngx-translate/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { EditableElementComponent } from "../../../components/editable-element/editable-element.component";
import { PosService } from "../../../../_services";

import { MatTooltipModule } from "@angular/material/tooltip";
import { SnackBarService } from "../../../../_services/snack-bar.service";
import { GoogleMapsLoaderService } from "src/app/_services/google-maps-loader.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-forms-pos",
  templateUrl: "./forms-pos.component.html",
  imports: [
    TranslateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    GoogleMapsModule,
    EditableElementComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: [
    "./forms-pos.component.css",
    "../../../../_forms/forms.directive.css",
  ],
})
export class PosFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() form: UntypedFormGroup = new UntypedFormGroup({});
  @Input() pos: Pos = {} as Pos;
  @Input() action: string = "";
  @Output() formChange = new EventEmitter<UntypedFormGroup>();

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap = {} as GoogleMap;
  @ViewChild("mapSearchField") searchField: ElementRef = new ElementRef(null);

  unsubscribe = new Subject<void>();

  posLon: string = "";
  posLat: string = "";
  isActive: boolean = true;
  marker: google.maps.Marker | null = null;

  options: google.maps.MapOptions = {
    center: { lat: 45.788, lng: 12.5 },
    zoom: 5,
    mapTypeId: "roadmap",
  };

  constructor(
    private cd: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private posService: PosService,
    private snackBarService: SnackBarService,
    private storageService: StorageService,
    private mapsLoader: GoogleMapsLoaderService
  ) {}

  ngOnInit(): any {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      latitude: [0, [Validators.required, this.latLonValidator]],
      longitude: [0, [Validators.required, this.latLonValidator]],
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
      isActive: [
        this.pos !== undefined && this.pos !== null ? this.pos.isActive : true,
        ,
      ],
    });
    this.form
      .get("name")
      ?.valueChanges.subscribe(() => this.formChange.emit(this.form));
    this.form
      .get("latitude")
      ?.valueChanges.subscribe(() => this.formChange.emit(this.form));
    this.form
      .get("longitude")
      ?.valueChanges.subscribe(() => this.formChange.emit(this.form));
    this.form
      .get("url")
      ?.valueChanges.subscribe(() => this.formChange.emit(this.form));
    this.form
      .get("isActive")
      ?.valueChanges.subscribe(() => this.formChange.emit(this.form));

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
        .subscribe(() => {});
    }
  }

  async ngAfterViewInit() {
    await this.mapsLoader.load(environment.googleMapsApiKey);

    const searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (!places || places.length === 0) return;

      const bounds = new google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry?.location) return;

        if (place.geometry.viewport) {
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
      google.maps.event.addListener(this.marker, "dragend", (event: any) => {
        this.markerLocation();
      });
    } else {
      this.marker.setPosition(latLng);
    }
    this.markerLocation();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  latLonValidator(control: AbstractControl) {
    const value = control.value;
    if (value !== 0) {
      return null; // Value is valid
    } else {
      return { nonZero: true }; // Value is not valid
    }
  }

  mapClick(event: google.maps.MapMouseEvent): any {
    const clickedLocation = event.latLng;
    if (clickedLocation) {
      this.setMarker(clickedLocation);
    }
  }

  setMarker(latLng: google.maps.LatLng): void {
    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: latLng,
        map: this.map.googleMap,
        draggable: true,
      });
      google.maps.event.addListener(this.marker, "dragend", (event: any) => {
        this.markerLocation();
      });
    } else {
      this.marker.setPosition(latLng);
    }
    this.markerLocation();
  }

  markerLocation(): any {
    if (!this.marker) return;
    const currentLocation = this.marker.getPosition();
    if (currentLocation) {
      this.form.controls.latitude.setValue(currentLocation.lat());
      this.form.controls.longitude.setValue(currentLocation.lng());

      this.posLat = currentLocation.lat().toFixed(5);
      this.posLon = currentLocation.lng().toFixed(5);
    }
  }

  onIsActiveChanged(event: Event): void {
    this.pos.isActive = this.isActive;
  }

  // toggle is active value and then perform the api call
  toggleIsActive(event: Event) {
    const isActiveControl = this.form.get("isActive");
    if (isActiveControl) {
      const newIsActiveValue = !isActiveControl.value;
      this.updatePosField("isActive", newIsActiveValue);
    }
  }
  updatePosField(key: string, value: any, isTableToUpdate: boolean = false) {
    console.log("Value ", value);
    this.form.controls[key].setValue(value);
    const updatedPos = { ...this.pos, [key]: value };

    this.posService
      .update(updatedPos)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: () => {
          if (isTableToUpdate) this.formChange.emit(this.form);
          this.pos = updatedPos;
          this.cd.detectChanges();
          this.snackBarService.openSnackBar("Update Successful");
        },
        error: (err) => {
          console.error(err);
          this.snackBarService.openSnackBar("Error occurred");
        },
      });
  }
}
