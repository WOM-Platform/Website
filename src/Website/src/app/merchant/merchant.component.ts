import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';

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
    minZoom: 6,
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

  ngAfterViewInit(): void {
    const searchBox = new google.maps.places.SearchBox(
        this.searchField.nativeElement
    );
    /*
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        this.searchField.nativeElement
    );
*/
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

  boundsChanged(): void {
    const bounds = this.map.getBounds().toJSON();
    console.log('north: ' + bounds.north);
    console.log('south: ' + bounds.south);
    console.log('east: ' + bounds.east);
    console.log('west: ' + bounds.west);

    // TODO: update markers with search data
  }
}
