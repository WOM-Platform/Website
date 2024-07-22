import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";
import * as L from 'leaflet';

@Component({
    selector: 'app-address-selector-map',
    standalone: true,
    imports: [],
    templateUrl: './address-selector-map.component.html',
    styleUrl: './address-selector-map.component.css'
})
export class AddressSelectorMapComponent implements AfterViewInit {

    private map: L.Map | undefined;

    constructor() {
    }


    ngAfterViewInit(): void {
        this.initMap();
        this.addSearchControl();
    }

    private initMap(): void {
        
        // check for user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                this.map = L.map('address-map').setView([lat, lon], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);

                this.addSearchControl();
            }, () => {
                // If geolocation fails or is denied, fall back to a default location
                this.initDefaultMap();
            });
        } else {
            // If geolocation is not available, fall back to a default location
            this.initDefaultMap();
        }

    }

    private initDefaultMap(): void {

        this.map = L.map('address-map').setView([43.729232, 12.6098207], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    private addSearchControl(): void {
        const searchLayer = L.layerGroup().addTo(this.map);

        L.marker([51.5, -0.09]).addTo(searchLayer).bindPopup('Sample Marker 1');
        L.marker([51.51, -0.1]).addTo(searchLayer).bindPopup('Sample Marker 2');
        L.marker([51.49, -0.08]).addTo(searchLayer).bindPopup('Sample Marker 3');

        // Add the search control to the map
        const searchControl = new (L.Control as any).Search({
            layer: searchLayer,
            initial: false,
            zoom: 12,
            marker: false
        });

        this.map.addControl(searchControl);

        const provider = new OpenStreetMapProvider();


        /*  const searchControl = GeoSearchControl({
            provider: provider,
            style: 'bar',
            autoComplete: true,
            autoCompleteDelay: 250,
            showMarker: true,
            retainZoomLevel: false,
            animateZoom: true,
            keepResult: true,
            searchLabel: 'Enter address'
          });*/

        this.map.on('geosearch/showlocation', (result: any) => {
            if (result.location) {
                const {x, y, label} = result.location;
                this.map.setView([y, x], 13);
                L.marker([y, x]).addTo(this.map).bindPopup(label).openPopup();
            }
        });
    }
}
