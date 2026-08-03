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
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { PosWithOffers } from "src/app/_models/offer";
import { MapService } from "src/app/_services";
import { GoogleMapsLoaderService } from "src/app/_services/google-maps-loader.service";
import { environment } from "src/environments/environment";

interface PeopleMarkerOffer {
  title: string;
  cost: number;
}

interface PeopleMarkerViewModel {
  position: google.maps.LatLngLiteral;
  title: string;
  info?: string;
  offers: PeopleMarkerOffer[];
  options: google.maps.MarkerOptions;
}

@Component({
  selector: "app-people-map-feature",
  imports: [GoogleMap, MapInfoWindow, MapMarker, TranslateModule],
  templateUrl: "./people-map-feature.component.html",
  styleUrl: "./people-map-feature.component.css",
})
export class PeopleMapFeatureComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap) private map?: GoogleMap;
  @ViewChild(MapInfoWindow) private infoWindow?: MapInfoWindow;
  @ViewChild("mapSearchField")
  private searchField?: ElementRef<HTMLInputElement>;
  @ViewChildren("markerElem")
  private mapMarkerElements?: QueryList<MapMarker>;

  protected mapLoaded = false;
  protected searchBox?: google.maps.places.SearchBox;
  protected infoContent = "";
  protected markers: PeopleMarkerViewModel[] = [];
  protected posList: PosWithOffers[] = [];
  protected zoom = 12;
  protected center: google.maps.LatLngLiteral = {
    lat: 43.72639929907197,
    lng: 12.636022293124498,
  };
  protected readonly options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    clickableIcons: true,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 22,
    minZoom: 5,
  };

  protected mapsReady = false;

  constructor(
    private readonly mapService: MapService,
    private readonly mapsLoader: GoogleMapsLoaderService,
    private translate: TranslateService
  ) {}

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

  async ngAfterViewInit() {
    await this.mapsLoader.load(environment.googleMapsApiKey);

    this.mapsReady = true;

    queueMicrotask(() => {
      this.initializeSearchBox();
      this.initializeInitialMapIdleListener();
    });
  }

  protected zoomIn(): void {
    const maxZoom = this.options.maxZoom ?? 22;

    if (this.zoom < maxZoom) {
      this.zoom++;
    }
  }

  protected zoomOut(): void {
    const minZoom = this.options.minZoom ?? 5;

    if (this.zoom > minZoom) {
      this.zoom--;
    }
  }

  protected openInfo(marker: MapMarker, content: PeopleMarkerViewModel): void {
    const offersLabel = this.translate.instant(
      "USERS.PEOPLE.MAP.OFFERS_AVAILABLE"
    );

    this.infoContent = `
      <div style="min-width:250px">
        <h2 style="margin:0 0 12px;font-size:20px;font-weight:600;">
          ${content.title}
        </h2>
    `;

    if (content.offers.length) {
      this.infoContent += `
        <strong font-size:10px;>${offersLabel}</strong>
        <ul style="padding-left:18px;margin:8px 0;">
          ${content.offers
            .map(
              (offer) => `
                <li style="font-size:8px;">
                  ${offer.title}
                  <strong>(${offer.cost} WOM)</strong>
                </li>
              `
            )
            .join("")}
        </ul>
      `;
    }

    if (content.info) {
      this.infoContent += `
        <p style="margin-top:12px">
          <a href="${content.info}" target="_blank" rel="noopener">
            More information
          </a>
        </p>
      `;
    }

    this.infoContent += `</div>`;

    this.infoWindow?.open(marker);
  }

  protected boundsChanged(): void {
    const currentBounds = this.map?.getBounds();

    if (!currentBounds) {
      console.log("bounds not available.");
      return;
    }

    if (!this.mapLoaded) {
      this.mapLoaded = true;
    }

    const bounds = currentBounds.toJSON();

    this.mapService
      .getPosWithOffers(
        bounds.west.toString(),
        bounds.east.toString(),
        bounds.south.toString(),
        bounds.north.toString()
      )
      .subscribe((res: PosWithOffers[]) => {
        this.posList = res ?? [];
        this.markers = this.posList.map((pos) => this.createMarker(pos));
      });
  }

  protected onPosSelection(pos: PosWithOffers): void {
    const markerData = this.markers.find((marker) => marker.title === pos.name);
    const markerElement = this.mapMarkerElements?.find(
      (marker) => marker.getTitle() === pos.name
    );

    if (!markerData || !markerElement) {
      return;
    }

    this.openInfo(markerElement, markerData);
  }

  protected trackMarker(marker: PeopleMarkerViewModel): string {
    return `${marker.title}-${marker.position.lat}-${marker.position.lng}`;
  }

  private initializeSearchBox(): void {
    if (!this.searchField) {
      return;
    }

    this.searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );

    this.searchBox.addListener("places_changed", () => {
      const places = this.searchBox?.getPlaces();

      if (!places || places.length === 0) {
        return;
      }

      const bounds = new google.maps.LatLngBounds();

      places.forEach((place) => {
        if (!place.geometry?.location) {
          return;
        }

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      this.map?.googleMap?.fitBounds(bounds);
      this.boundsChanged();
    });
  }

  private initializeInitialMapIdleListener(): void {
    this.map?.googleMap?.addListener("idle", () => {
      if (this.mapLoaded) {
        return;
      }

      setTimeout(() => {
        const currentZoom = this.map?.googleMap?.getZoom();

        if (currentZoom != null) {
          this.map?.googleMap?.setZoom(currentZoom - 1);
        }
      }, 1000);
    });
  }

  private createMarker(posData: PosWithOffers): PeopleMarkerViewModel {
    return {
      title: posData.name,
      info: posData.url,
      position: {
        lat: posData.position.latitude,
        lng: posData.position.longitude,
      },
      offers:
        posData.offers?.map((offer) => ({
          title: offer.title,
          cost: offer.cost,
        })) ?? [],
      options: {
        icon: {
          url: "assets/images/pin-wom.png",
          scaledSize: new google.maps.Size(30, 50),
          anchor: new google.maps.Point(15, 50),
        },
      },
    };
  }
}
