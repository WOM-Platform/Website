import {Component, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit{
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  infoContent = '';
  markers = [];
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    clickableIcons: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 3,
  };

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    }, () => {
      this.center = {
        lat: 43.83833794129076,
        lng: 13.02318609717848,
      };
    });

    this.addMarker();
    this.addMarker();
    this.addMarker();
  }

  zoomIn(): void {
    if (this.zoom < this.options.maxZoom)
    {
      this.zoom++;
    }
  }

  zoomOut(): void {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  click(event: google.maps.MapMouseEvent): void {
    console.log(event);
  }

  logCenter(): void {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(): void {
    this.markers.push({
      position: {
        lat: 43.83833794129076 + ((Math.random() - 0.5) * 2) / 10,
        lng: 13.02318609717848 + ((Math.random() - 0.5) * 2) / 10,
      },
      // label: {
      //   color: 'red',
      //   text: 'Marker label ' + (this.markers.length + 1),
      // },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    });
  }

  openInfo(marker: MapMarker, content): void {
    this.infoContent = content;
    this.infoWindow.open(marker);
  }
}
