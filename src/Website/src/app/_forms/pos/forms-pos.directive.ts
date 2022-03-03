import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import MapTypeId = google.maps.MapTypeId;
import {GoogleMap} from '@angular/google-maps';

@Component({
    selector: 'app-forms-pos',
    templateUrl: './forms-pos.directive.html',
    styleUrls: ['./forms-pos.directive.css', '../forms.directive.css']
})
export class PosFormComponent implements OnInit {
    @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

    posLon: string;
    posLat: string;
    marker: google.maps.Marker;
    options: google.maps.MapOptions = {
        center: {lat: 45.788, lng: 9.948},
        zoom: 4,
        mapTypeId: MapTypeId.ROADMAP
    };

    @Input() form: FormGroup;
    @Input() edit: boolean = false;
    @Output() formChange = new EventEmitter<FormGroup>();

    constructor(private fb: FormBuilder){}

    ngOnInit(): any {
        this.form = this.fb.group({
            name: ['', Validators.required, Validators.minLength(4)],
            latitude: [{value: 0, disabled: true}, Validators.required],
            longitude: [{value: 0, disabled: true}, Validators.required],
            url: ['', !Validators.required],
            isActive: ['', !Validators.required]
        });

        this.form.get('name').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('latitude').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('longitude').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('url').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('isActive').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }

    mapClick(event): any {
        console.log(event);
        const clickedLocation = event.latLng;
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: clickedLocation,
                map: this.map.googleMap,
                draggable: true
            });
            google.maps.event.addListener(this.marker, 'dragend', (evt) => {
                this.markerLocation();
            });
        } else {
            this.marker.setPosition(clickedLocation);
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
}
