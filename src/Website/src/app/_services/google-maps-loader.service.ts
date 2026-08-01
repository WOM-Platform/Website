import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GoogleMapsLoaderService {
  private scriptLoadingPromise: Promise<void> | null = null;
  private isLoaded = false;

  load(apiKey: string): Promise<void> {
    if (this.isLoaded && window.google?.maps) {
      return Promise.resolve();
    }

    if (this.scriptLoadingPromise) {
      return this.scriptLoadingPromise;
    }

    this.scriptLoadingPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&language=it`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        const checkGoogle = () => {
          if (window.google?.maps) {
            this.isLoaded = true;
            resolve();
          } else {
            setTimeout(checkGoogle, 50);
          }
        };

        checkGoogle();
      };

      script.onerror = (err) => {
        reject(err);
      };

      document.head.appendChild(script);
    });

    return this.scriptLoadingPromise;
  }
}
