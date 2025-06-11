import { BrowserModule } from "@angular/platform-browser";
import {
  APP_INITIALIZER,
  LOCALE_ID,
  NgModule,
  ErrorHandler,
} from "@angular/core";
import { Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import Nora from "@primeng/themes/nora";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { appRoutingModule } from "./app.routing";
import { RouterModule } from "@angular/router";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { JoinstringsPipe } from "src/app/_helpers/joinstringsPipe";

import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home";
import { HttpMockRequestInterceptor } from "./_helpers/HttpMockRequestInterceptor";
import {
  LogoutDialogComponent,
  NavComponent,
} from "./components/nav/nav.component";
import { MerchantSignUpComponent } from "./authentication/signup/signup.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { PrivacyInstrumentComponent } from "./pages/privacy/instrument/instrument.component";
import { PrivacyPocketComponent } from "./pages/privacy/pocket/pocket.component";
import { PrivacyPosComponent } from "./pages/privacy/pos/pos.component";
import { PrivacyWomFitComponent } from "./pages/privacy/womFit/womFit.component";
import { PrivacyWebsiteComponent } from "./pages/privacy/website/website.component";
import { PrivacyOverviewComponent } from "./pages/privacy/overview/overview.component";
import { SignInComponent } from "./authentication/signin/signin.component";

import { FanoComponent } from "./pages/about/fano/fano.component";
import { SharedModule } from "./shared/shared.module";
import { UrbinoComponent } from "./pages/about/urbino/urbino.component";
import { AboutComponent } from "./pages/about/about/about.component";
import { AboutSectionComponent } from "./pages/about/about-section.component";
import { ApplicationsAworldComponent } from "./pages/users/applications/aworld/aworld.component";
import { ApplicationsBalanceComponent } from "./pages/users/applications/balance/balance.component";
import { ApplicationsCodymazeComponent } from "./pages/users/applications/codymaze/codymaze.component";
import { ApplicationsComponent } from "./pages/users/applications/applications.component";
import { ApplicationsLibrariesComponent } from "./pages/users/applications/libraries/libraries.component";
import { ApplicationsOverviewComponent } from "./pages/users/applications/overview/overview.component";
import { ApplicationsUniversitiesComponent } from "./pages/users/applications/universities/universities.component";
import { AppOverlayModule } from "./_overlay/overlay.module";
import { BillingCancelComponent } from "./billing/cancel/cancel.component";
import { BillingCheckoutComponent } from "./billing/checkout/checkout.component";
import { BillingSuccessComponent } from "./billing/success/success.component";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { CarouselModule } from "primeng/carousel";
import { CommonModule, registerLocaleData } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import * as Sentry from "@sentry/angular";

import { environment } from "../environments/environment";
import { GoogleMapsModule } from "@angular/google-maps";
import { InstrumentComponent } from "./pages/instrument/instrument.component";
import { LogInErrorDialogComponent } from "./authentication/signup/signup-login-error.directive";
import { MerchantComponent } from "./pages/merchant/merchant.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";
import { ProgressSpinnerComponent } from "./_progressSpinner/progress-spinner.component";
import { RequestNewPasswordComponent } from "./authentication/requestNewPassword/request-new-password.component";
import { ResetPasswordComponent } from "./authentication/reset-password/reset-password.component";
import { TokenInterceptorService } from "./_helpers/httpInterceptor";
import { UserFormComponent } from "./_forms/user/forms-user.directive";
import { UsersComponent } from "./pages/users/users/users.component";
import { PdfViewerContainerComponent } from "./components/pdf-viewer-container/pdf-viewer-container.component";
import { LayoutModule } from "@angular/cdk/layout";
import { AuthModule } from "./user/auth.module";
import { ReteDelleRetiComponent } from "./pages/projects/rete-delle-reti/rete-delle-reti-component";
import { Pesaro2024Component } from "./pages/pesaro2024-section/pesaro2024/pesaro2024.component";
import { Pesaro2024SectionComponent } from "./pages/pesaro2024-section/pesaro2024-section.component";
import { NgChartsModule } from "ng2-charts";
import { SearchSourceComponent } from "./user/components/user-access-list/search-source/search-source.component";
import localeIt from "@angular/common/locales/it";
import { StoreLogosComponent } from "./components/store-logos/store-logos.component";
import { AnimatedNumberComponent } from "./components/animated-number/animated-number.component";
import { ApplicationsWomFitComponent } from "./pages/users/applications/womfit/womfit.component";
import { BtnFindOutMoreComponent } from "./components/btn-find-out-more/btn-find-out-more.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { SmallImagesCarouselComponent } from "./components/small-images-carousel/small-images-carousel.component";

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(
    http,
    "./assets/i18n/",
    ".json?cb=" + environment.i18n
  );

export function translateFactory(translate: TranslateService): any {
  return async () => {
    translate.setDefaultLang("en");
    translate.use("en");
    return new Promise<void>((resolve) => {
      translate.onLangChange.subscribe(() => {
        resolve();
      });
    });
  };
}

export const isMock = environment.mock;

const httpInterceptorProviders = environment.mock
  ? [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpMockRequestInterceptor,
        multi: true,
      },
    ]
  : [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true,
      },
    ];

@NgModule({
  declarations: [
    AboutComponent,
    AboutSectionComponent,
    AppComponent,
    ApplicationsAworldComponent,
    ApplicationsBalanceComponent,
    ApplicationsCodymazeComponent,
    ApplicationsComponent,
    ApplicationsLibrariesComponent,
    ApplicationsOverviewComponent,
    ApplicationsWomFitComponent,
    ApplicationsUniversitiesComponent,
    BillingCancelComponent,
    BillingCheckoutComponent,
    BillingSuccessComponent,
    BreadcrumbsComponent,
    FanoComponent,
    FooterComponent,
    HomeComponent,
    InstrumentComponent,
    JoinstringsPipe,
    LogInErrorDialogComponent,
    LogoutDialogComponent,
    MerchantComponent,
    MerchantSignUpComponent,
    NavComponent,
    PageNotFoundComponent,
    PdfViewerContainerComponent,
    Pesaro2024Component,
    PrivacyComponent,
    PrivacyInstrumentComponent,
    PrivacyOverviewComponent,
    PrivacyPocketComponent,
    PrivacyPosComponent,
    PrivacyWomFitComponent,
    PrivacyWebsiteComponent,
    ProgressSpinnerComponent,
    RequestNewPasswordComponent,
    ResetPasswordComponent,
    ReteDelleRetiComponent,
    SignInComponent,
    UrbinoComponent,
    UserFormComponent,
    UsersComponent,
    Pesaro2024SectionComponent,
  ],
  exports: [],
  bootstrap: [AppComponent],
  imports: [
    appRoutingModule,
    AnimatedNumberComponent,
    AuthModule,
    RouterModule.forRoot(
      [{ path: "", component: HomeComponent, pathMatch: "full" }],
      {
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
      }
    ),
    TranslateModule.forRoot({
      defaultLanguage: "it",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppOverlayModule,
    BreadcrumbModule,
    BrowserModule,
    CarouselModule,
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    OverlayModule,
    ReactiveFormsModule,
    SharedModule,
    LayoutModule,
    NgChartsModule,
    SearchSourceComponent,
    StoreLogosComponent,
    BtnFindOutMoreComponent,
    CarouselComponent,
    SmallImagesCarouselComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Nora,
        options: {
          prefix: "p",
          darkModeSelector: "light",
          cssLayer: false,
        },
      },
    }),
    ...httpInterceptorProviders,
    CookieService,
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: "it-IT" },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
  ],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeIt);
  }
}
