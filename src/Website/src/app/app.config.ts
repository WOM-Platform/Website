import {
  ApplicationConfig,
  importProvidersFrom,
  ErrorHandler,
  LOCALE_ID,
  provideZoneChangeDetection,
} from "@angular/core";

import { provideRouter, withInMemoryScrolling } from "@angular/router";

import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

import { routes } from "./app.routes";

import { createTranslateLoader } from "./app.providers";

import { CookieService } from "ngx-cookie-service";

import * as Sentry from "@sentry/angular";

import { Router } from "@angular/router";
import { tokenInterceptor } from "./_helpers/httpInterceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      })
    ),

    provideHttpClient(withInterceptors([tokenInterceptor])),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: "it",
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),

    CookieService,

    {
      provide: Sentry.TraceService,
      deps: [Router],
    },

    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },

    {
      provide: LOCALE_ID,
      useValue: "it-IT",
    },
  ],
};
