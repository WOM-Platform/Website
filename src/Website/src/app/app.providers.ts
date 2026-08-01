import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from "@ngx-translate/core";

import { environment } from "../environments/environment";
import { GoogleMapsLoaderService } from "./_services/google-maps-loader.service";

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    ".json?cb=" + environment.i18n
  );

export function translateFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang("en");
    translate.use("en");

    return new Promise<void>((resolve) => {
      translate.onLangChange.subscribe(() => {
        resolve();
      });
    });
  };
}

export function initMaps(loader: GoogleMapsLoaderService) {
  return () => loader.load(environment.googleMapsApiKey);
}
