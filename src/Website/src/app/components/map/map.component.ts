import {Component, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';
import * as L from "leaflet"
import {Observable, Subscriber} from 'rxjs';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    standalone: true,
    imports: []
})
export class MapComponent implements AfterViewInit {
    @Output() bounds = new EventEmitter<any>()
    private map;

    constructor() {
    }

    ngAfterViewInit(): void {
        // first layer map: openStreetMap
        this.initOpenStreetMap()
        // second layer map: transactionMap
        this.initTransactionMap()
    }


    private initOpenStreetMap(): void {
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        this.getPosition().subscribe((position: any) => {
            console.log("la posizione ", position)
            if (position) {
                this.map = L.map('map', {
                    center: [position.latitude, position.longitude],
                    zoom: 13
                });
                this.map.on('moveend', this.onBoundsChanged.bind(this));
            }

            tiles.addTo(this.map);
        })
    }

    private emitBounds() {
        const bounds = this.map.getBounds();
        const leftTop: [number, number] = [bounds.getNorthWest().lat, bounds.getNorthWest().lng];
        const rightBottom: [number, number] = [bounds.getSouthEast().lat, bounds.getSouthEast().lng];
        this.bounds.emit({leftTop, rightBottom});
    }

    private onBoundsChanged() {
        const bounds = this.map.getBounds();

        const leftTop = [bounds.getNorthWest().lat, bounds.getNorthWest().lng];
        const rightBottom = [bounds.getSouthEast().lat, bounds.getSouthEast().lng];

        this.bounds.emit({leftTop, rightBottom});
    }

    //
    private initTransactionMap() {
        const TM_TILES_URL = 'URL_OF_SERVER_TILES';

        L.tileLayer(TM_TILES_URL).addTo(this.map)
    }

    private getPosition(): any {
        return new Observable((observer: Subscriber<any>) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position: any) => {
                    observer.next({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    observer.complete();
                });
            } else {
                observer.error();
            }
        });
    }


}
