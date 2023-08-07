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

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        console.log("T her")
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
  
  private initMap(): void {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.getCurrentPosition().subscribe((position: any) => {
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

  constructor() { }

  ngAfterViewInit() : void {
    this.initMap()
  }
  
}
