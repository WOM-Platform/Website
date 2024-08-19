import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {StatsService} from "../../../_services";

@Component({
    selector: 'app-amount-map',
    standalone: true,
    templateUrl: './amount-map.component.html',
    styleUrls: ['./amount-map.component.css']
})
export class AmountMapComponent implements OnInit {
    locations: any[] = [];
    bboxAmountMap: any = {};
    private map!: L.Map;
    private circlesLayer = L.layerGroup(); // Layer group to hold the circles

    constructor(private statsService: StatsService) {
    }

    ngOnInit(): void {
        this.initMap();
    }

    private initMap(): void {
        // Check for user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    this.map = L.map('amount-map').setView([lat, lon], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(this.map);

                    this.circlesLayer.addTo(this.map); // Add the layer group to the map

                    this.addMapEventListeners();
                },
                () => {
                    // Fallback to default location
                    this.initDefaultMap();
                }
            );
        } else {
            // Geolocation not available, fallback to default location
            this.initDefaultMap();
        }
    }

    private initDefaultMap(): void {
        this.map = L.map('amount-map').setView([43.729232, 12.6098207], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // Add the layer group to the map
        this.circlesLayer.addTo(this.map);

        this.addMapEventListeners();
    }

    private addMapEventListeners(): void {
        this.map.on('moveend', () => {
            this.getBounds();
        });

        this.getBounds(); // Fetch initial data
    }

    private getBounds(): void {
        const bounds = this.map.getBounds();
        const zoomLevel = this.map.getZoom();

        this.bboxAmountMap = {
            north: bounds.getNorth().toString(),
            south: bounds.getSouth().toString(),
            east: bounds.getEast().toString(),
            west: bounds.getWest().toString(),
            zoomLevel: zoomLevel.toString()
        };

        this.getPosition(); // Fetch data based on updated bounds
    }

    private getPosition(): void {
        const {north, south, east, west, zoomLevel} = this.bboxAmountMap;

        console.log("BBox ", this.bboxAmountMap)
        this.statsService.getAdminCreatedAmountByPosition(north, south, east, west, zoomLevel).subscribe(data => {
            this.locations = data;
            this.addCircles();
        });
    }

    private addCircles(): void {
        if (!this.map) return;

        // Clear existing circles
        this.circlesLayer.clearLayers();

        this.locations.forEach(location => {
            const circle = L.circle([location.latitude, location.longitude], {
                color: 'blue',
                fillColor: '#30f',
                fillOpacity: 0.5,
                radius: this.getRadiusFromAmount(location.amount)
            }).addTo(this.circlesLayer);

            circle.bindPopup(`ID: ${location.id}<br>Amount: ${location.amount}`);
        });
    }

    private getRadiusFromAmount(amount: number): number {
        const scaleFactor = 10;
        return amount * scaleFactor;
    }
}
