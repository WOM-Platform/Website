import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {MapService} from '../_services';
import {PosMap} from '../_models';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  @ViewChild('mapSearchField') searchField: ElementRef;
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
    const searchBox = new google.maps.places.SearchBox(
        this.searchField.nativeElement
    );

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
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

  click(event: google.maps.MapMouseEvent): void {
    console.log(event);
  }

  logCenter(): void {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(posData: PosMap): void {
    this.markers.push({
      position: {
        lat: posData.position.latitude,
        lng: posData.position.longitude,
      },
      title: posData.name,
      info: posData.url,
      options: {
        animation: google.maps.Animation.DROP,
      },
      clickable: true
    });
  }

  openInfo(marker: MapMarker, content): void {
    this.infoContent = '<b>' + content.title + '</b>';
    if (content.info !== null) {
      this.infoContent += '<br><br>' + '<a href="' + content.info + '">' + content.info + '</a>';
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
      console.log(res);
      this.markers = [];
      if (res == null) {
        return;
      }
      for (const i of res.pos) {
        console.log(i);
        this.addMarker(i);
      }
    });
  }
}
