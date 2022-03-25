import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MapService} from '../_services';
import {Pos, PosMap} from '../_models';
import {MatSelectionListChange} from "@angular/material/list";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapMarker, { static: false }) mapMarker: MapMarker;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  @ViewChild('mapSearchField') searchField: ElementRef;
  searchBox: google.maps.places.SearchBox;
  infoContent = '';
  markers = [];
  posList: PosMap[] = [];
  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 43.72639929907197,
    lng: 12.636022293124498
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    clickableIcons: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 5,
  };

  constructor(private mapService: MapService) {
  }

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
  }

  ngAfterViewInit(): void {

    this.searchBox = new google.maps.places.SearchBox(
        this.searchField.nativeElement
    );

    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      if(google === undefined)
        return;

      const bounds = new google.maps.LatLngBounds();
      places.forEach(place =>  {
        if (!place.geometry || !place.geometry.location) {
          return;
        }
        if (place.geometry.viewport) {
          // Only geocodes have viewport
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
      this.boundsChanged();
    });
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

  logCenter(): void {
    // console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(posData: PosMap): void {
    const marker: google.maps.Marker = new google.maps.Marker();
    marker.setPosition({
      lat: posData.position.latitude,
      lng: posData.position.longitude,
    });
    marker.setTitle(posData.name);
    marker.setValues({info: posData.url});
    marker.setClickable(true);
    this.markers.push(marker);

    /*
    marker.addListener("click", () => {
      this.infoWindow.infoWindow.open(marker.getMap(), marker);
    });
    */
  }

  openInfo(marker: MapMarker, content): void {
    this.infoContent = '<b>' + content.title + '</b>';
    if (content.info !== null) {
      this.infoContent += '<br><br>' + '<a href="' + content.info + ' "target="_blank">' + content.info + '</a>';
    }
    this.infoWindow.open(marker);
  }

  boundsChanged(): void {
    if (this.map === null || this.map.getBounds() === null) {
      return;
    }

    const bounds = this.map.getBounds().toJSON();
    this.mapService.getPosList(
        bounds.west.toString(),
        bounds.east.toString(),
        bounds.south.toString(),
        bounds.north.toString()
    ).subscribe(res => {
      this.markers = [];
      if (res == null) {
        return;
      }
      this.posList = res.pos;
      for (const i of res.pos) {
        this.addMarker(i);
      }
    });
  }

  onPosSelection(event: MatSelectionListChange) {
    const pos: PosMap = event.options[0].value;
    const marker: google.maps.Marker = this.markers.find(m => m.title === pos.name);
    console.log(marker);
    google.maps.event.trigger(marker, 'click', {
      latLng:marker.getPosition()
    });
  }
}
