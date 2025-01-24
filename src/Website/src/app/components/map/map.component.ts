import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import * as L from "leaflet";
import { Observable, Subscriber } from "rxjs";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
  imports: [],
  standalone: true,
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() selectedBounds: any;
  @Input() isEditing: boolean = false;
  @Output() bounds = new EventEmitter<any>();
  private map;

  constructor() {}

  ngAfterViewInit(): void {
    // First layer map: OpenStreetMap
    this.initOpenStreetMap();
    // Second layer map: TransactionMap
    this.initTransactionMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedBounds && this.map) {
      this.setMapBounds(this.selectedBounds);
    }
  }

  private initOpenStreetMap(): void {
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    this.getPosition().subscribe((position: any) => {
      if (position) {
        this.map = L.map("map", {
          center: [position.latitude, position.longitude],
          zoom: 13,
        });

        this.map.on("dragend", this.onBoundsChanged.bind(this));
        tiles.addTo(this.map);

        // Set initial bounds if provided
        if (this.selectedBounds) {
          this.setMapBounds(this.selectedBounds);
        }
      }
    });
  }

  private emitBounds(): void {
    if (!this.isEditing) {
      const bounds = this.map.getBounds();
      const leftTop: [number, number] = [
        bounds.getNorthWest().lat,
        bounds.getNorthWest().lng,
      ];
      const rightBottom: [number, number] = [
        bounds.getSouthEast().lat,
        bounds.getSouthEast().lng,
      ];
      this.bounds.emit({ leftTop, rightBottom });
    }
  }

  private onBoundsChanged(): void {
    this.emitBounds();
  }

  private setMapBounds(bounds): void {
    const latLngBounds = L.latLngBounds(bounds.leftTop, bounds.rightBottom);
    this.map.fitBounds(latLngBounds);
  }

  private initTransactionMap(): void {
    const TM_TILES_URL = "URL_OF_SERVER_TILES";
    L.tileLayer(TM_TILES_URL).addTo(this.map);
  }

  private getPosition(): Observable<any> {
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
