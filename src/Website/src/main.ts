import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
import localeIt from "@angular/common/locales/it";
import { environment } from "./environments/environment";

import * as Sentry from "@sentry/angular";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeIt);

Sentry.init({
  dsn: environment.sentryDsn,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,

  tracePropagationTargets: ["localhost", environment.baseUrl],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
