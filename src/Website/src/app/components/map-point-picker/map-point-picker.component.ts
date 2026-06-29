import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";

const DEFAULT_POSITION = { lat: 43.725, lng: 12.636 }; // Urbino

@Component({
  selector: "app-map-point-picker",
  templateUrl: "./map-point-picker.component.html",
  standalone: true,
})
export class MapPointPickerComponent implements AfterViewInit {
  @Output() locationChange = new EventEmitter<{
    lat: number;
    lng: number;
  }>();

  @ViewChild("searchBox", { static: false })
  searchBox!: ElementRef<HTMLInputElement>;

  map!: google.maps.Map;
  marker!: google.maps.Marker;
  autocomplete!: google.maps.places.Autocomplete;

  async ngAfterViewInit() {
    const center = await this.getUserLocation();

    this.initMap(center);
    this.initMarker(center);
    this.initClickListener();
    requestAnimationFrame(() => {
      this.initAutocomplete();
    });
  }

  private initMap(center: google.maps.LatLngLiteral): void {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center,
        zoom: 13,
        mapTypeControl: false,
      }
    );
  }

  private initMarker(position: google.maps.LatLngLiteral): void {
    this.marker = new google.maps.Marker({
      map: this.map,
      position,
      draggable: true,
    });

    this.marker.addListener("dragend", () => {
      const pos = this.marker.getPosition();
      if (!pos) return;

      this.emit(pos.lat(), pos.lng());
    });
  }

  private initClickListener(): void {
    this.map.addListener("click", (event: google.maps.MapMouseEvent) => {
      if (!event.latLng) return;

      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      this.setPosition(lat, lng);
    });
  }

  private initAutocomplete(): void {
    const input = this.searchBox?.nativeElement;

    if (!input) {
      console.warn("Search box not ready");
      return;
    }

    this.autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ["geometry", "formatted_address"],
    });

    this.autocomplete.addListener("place_changed", () => {
      const place = this.autocomplete.getPlace();

      if (!place.geometry?.location) {
        console.warn("No geometry returned for place");
        return;
      }

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      this.setPosition(lat, lng);

      this.map.panTo({ lat, lng });
      this.map.setZoom(15);
    });
  }

  private setPosition(lat: number, lng: number): void {
    const position = { lat, lng };

    this.marker.setPosition(position);
    this.map.panTo(position);

    this.emit(lat, lng);
  }

  private emit(lat: number, lng: number): void {
    this.locationChange.emit({ lat, lng });
  }

  private getUserLocation(): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(DEFAULT_POSITION);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => resolve(DEFAULT_POSITION),
        {
          timeout: 3000,
        }
      );
    });
  }
}
