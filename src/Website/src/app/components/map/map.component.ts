import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from "leaflet"
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

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
  
  private initOpenStreetMap(): void {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.getPosition().subscribe((position: any) => {
      console.log("la posizione ",position)
      if (position) {
      this.map = L.map('map', {
        center: [ position.latitude, position.longitude ],
        zoom: 13
      });
    }

      tiles.addTo(this.map);
    })
  }

  //
  private initTransactionMap() {
    const TM_TILES_URL = 'URL_OF_SERVER_TILES';

    L.tileLayer(TM_TILES_URL).addTo(this.map)
  }

  constructor() { }

  ngAfterViewInit() : void {
    // first layer map: openStreetMap
    this.initOpenStreetMap()
    // second layer map: transactionMap
    this.initTransactionMap()
  }
  
}
