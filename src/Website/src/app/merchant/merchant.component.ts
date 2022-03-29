import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MapService} from '../_services';
import {PosMap} from '../_models';
import {MatSelectionListChange} from "@angular/material/list";
import {MarkerClusterer} from "@googlemaps/markerclusterer";

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
  mapLoaded = false;
  searchBox: google.maps.places.SearchBox;
  infoContent = '';
  markers: google.maps.Marker[] = [];
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
    maxZoom: 22,
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
      this.zoom = 17;
    }, () => {
      console.log('Position not allowed.');
      this.zoom = 17;
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

    this.map.googleMap.addListener( 'idle', () => {
      if (!this.mapLoaded) {
        setTimeout(() => {
          this.map.googleMap.setZoom(this.map.googleMap.getZoom() - 1);
        }, 1000)
      }
    })
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
    var icon = {
      url: "assets/images/wom_map_pin.png", // url
      scaledSize: new google.maps.Size(30, 50), // scaled size
      //origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(15, 50) // anchor
    };
    const marker: google.maps.Marker = new google.maps.Marker({
      title: posData.name,
      clickable: true,
      icon: icon,
      position: {
        lat: posData.position.latitude,
        lng: posData.position.longitude,
      }
    });
    marker.setValues({
      info: posData.url,
    });
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
      console.log('map not available.');
      return;
    }

    if(!this.mapLoaded) {
      this.mapLoaded = true;
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

      /*
      const markerClusterer = new MarkerClusterer({
        map: this.map.googleMap,
        markers: this.markers
      });
      */
    });
  }

  onPosSelection(event: MatSelectionListChange) {
    const pos: PosMap = event.options[0].value;
    const marker: google.maps.Marker = this.markers.find(m => m.getTitle() === pos.name);
    google.maps.event.trigger(marker, 'click', {
      latLng:marker.getPosition()
    });
  }
}
