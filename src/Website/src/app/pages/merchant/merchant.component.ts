import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { MapService } from "../../_services";
import { PosMap } from "../../_models";
import {
  MatSelectionList,
  MatSelectionListChange,
} from "@angular/material/list";
import { TranslateModule } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { CommonModule } from "@angular/common";
import { PosWithOffers } from "src/app/_models/offer";

@Component({
  selector: "app-merchant",
  templateUrl: "./merchant.component.html",
  styleUrls: ["./merchant.component.css"],
  imports: [
    CommonModule,
    GoogleMap,
    MapInfoWindow,
    MapMarker,
    TranslateModule,
    MatSelectionList,
    StoreLogosComponent,
  ],
  standalone: true,
})
export class MerchantComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild("mapSearchField") searchField!: ElementRef<HTMLInputElement>;
  @ViewChildren("markerElem") mapMarkerElem!: QueryList<MapMarker>;

  mapLoaded = false;
  searchBox: google.maps.places.SearchBox;
  infoContent = "";
  markers: {
    position: google.maps.LatLngLiteral;
    title: string;
    info?: string;
    options?: google.maps.MarkerOptions;
  }[] = [];
  posList: PosWithOffers[] = [];
  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 43.72639929907197,
    lng: 12.636022293124498,
  };
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    clickableIcons: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 22,
    minZoom: 5,
  };

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.zoom = 17;
      },
      () => {
        console.error("Position not allowed.");
        this.zoom = 17;
      }
    );
  }

  ngAfterViewInit(): void {
    this.searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );

    this.searchBox.addListener("places_changed", () => {
      const places = this.searchBox.getPlaces();

      if (!places || places.length === 0) {
        return;
      }

      if (typeof google === "undefined") return;

      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
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

    this.map.googleMap?.addListener("idle", () => {
      if (!this.mapLoaded) {
        setTimeout(() => {
          const currentZoom = this.map.googleMap?.getZoom();

          if (currentZoom != null) {
            this.map.googleMap?.setZoom(currentZoom - 1);
          }
        }, 1000);
      }
    });
  }

  zoomIn(): void {
    if (this.zoom < this.options.maxZoom) {
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

  addMarker(posData: PosWithOffers): void {
    this.markers.push({
      title: posData.name,
      info: posData.url,
      position: {
        lat: posData.position.latitude,
        lng: posData.position.longitude,
      },
      options: {
        icon: {
          url: "assets/images/pin-wom.png",
          scaledSize: new google.maps.Size(30, 50),
          anchor: new google.maps.Point(15, 50),
        },
      },
    });
  }

  openInfo(
    marker: MapMarker,
    content: {
      title: string;
      info?: string;
    }
  ): void {
    this.infoContent = `<b>${content.title}</b>`;

    if (content.info) {
      this.infoContent +=
        `<br><br><a href="${content.info}" target="_blank">` +
        `${content.info}</a>`;
    }

    this.infoWindow.open(marker);
  }

  boundsChanged(): void {
    if (this.map === null || this.map.getBounds() === null) {
      console.log("map not available.");
      return;
    }

    if (!this.mapLoaded) {
      this.mapLoaded = true;
    }

    const bounds = this.map.getBounds().toJSON();
    this.mapService
      .getPosWithOffers(
        bounds.west.toString(),
        bounds.east.toString(),
        bounds.south.toString(),
        bounds.north.toString()
      )
      .subscribe((res: PosWithOffers[]) => {
        this.markers = [];

        if (!res) return;

        this.posList = res;

        for (const pos of res) {
          this.addMarker(pos);
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
    const pos: PosWithOffers = event.options[0].value;

    const markerData = this.markers.find((m) => m.title === pos.name);

    const markerElem = this.mapMarkerElem.find(
      (mm) => mm.getTitle() === pos.name
    );

    if (!markerData || !markerElem) {
      return;
    }

    this.openInfo(markerElem, markerData);
  }
}
