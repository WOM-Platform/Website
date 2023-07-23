import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {appRoutingModule} from './app.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {JoinstringsPipe} from 'src/app/_helpers/joinstringsPipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home';
import {HttpMockRequestInterceptor} from './_helpers/HttpMockRequestInterceptor';
import {LogoutDialogComponent, NavComponent} from './nav/nav.component';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {PrivacyStepcounterComponent} from './privacy/stepcounter/stepcounter.component';
import {PrivacyWebsiteComponent} from './privacy/website/website.component';
import {SignInComponent} from './authentication/signin/signin.component';

import { FanoComponent } from './about/fano/fano.component';
import { ManageComponent } from './manage/manage/manage.component'
import { SharedModule } from './shared/shared.module';
import { UrbinoComponent } from './about/urbino/urbino.component';
import {AboutComponent} from "./about/about/about.component";
import {AboutSectionComponent} from "./about/about-section.component";
import {AddMerchantDialogComponent} from './user/add-merchant/add-merchant.component';
import {AddPosDialogComponent} from './user/add-pos/add-pos.component';
import {ApplicationsAworldComponent} from "./applications/aworld/aworld.component";
import {ApplicationsBalanceComponent} from "./applications/balance/balance.component";
import {ApplicationsCodymazeComponent} from "./applications/codymaze/codymaze.component";
import {ApplicationsComponent} from './applications/applications.component';
import {ApplicationsLibrariesComponent} from "./applications/libraries/libraries.component";
import {ApplicationsOverviewComponent} from "./applications/overview/overview.component";
import {ApplicationsStepcounterComponent} from './applications/stepcounter/stepcounter.component';
import {ApplicationsUniversitiesComponent} from "./applications/universities/universities.component";
import {AppOverlayModule} from './_overlay/overlay.module';
import {BillingCancelComponent} from "./billing/cancel/cancel.component";
import {BillingCheckoutComponent} from "./billing/checkout/checkout.component";
import {BillingSuccessComponent} from "./billing/success/success.component";
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {CarouselModule} from "primeng/carousel";
import {CommonModule} from '@angular/common';
import {ContactFormComponent} from "./_forms/contact/forms-contact.directive";
import {ContactsComponent} from "./contacts/contacts.component";
import {CookieService} from 'ngx-cookie-service';

import {environment} from '../environments/environment';
import {GoogleMapsModule} from '@angular/google-maps';
import {InstrumentComponent} from './instrument/instrument.component';
import {LogInErrorDialogComponent} from './authentication/signup/signup-login-error.directive';
import {MerchantComponent} from './merchant/merchant.component';
import {MerchantFormComponent} from './_forms/merchant/forms-merchant.directive';
import {MerchantStatsComponent} from "./user/stats/merchant/merchant-stats.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {OverlayModule} from '@angular/cdk/overlay';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {PosFormComponent} from './_forms/pos/forms-pos.directive';
import {PrivacyOverviewComponent} from "./privacy/overview/overview.component";
import {ProgressSpinnerComponent} from './_progressSpinner/progress-spinner.component';
import {RequestNewPasswordComponent} from './authentication/requestNewPassword/request-new-password.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {TokenInterceptorService} from './_helpers/httpInterceptor';
import {UserFormComponent} from './_forms/user/forms-user.directive';
import {UserHomeComponent} from './user/home/user-home.component';
import {UserMerchantComponent} from "./user/merchant/user-merchant.component";
import {UserNotVerifiedComponent} from './user/not-verified/user-not-verified.component';
import {UserStatsComponent} from "./user/stats/user-stats.component";
import {UserVerifyComponent} from './user/verify/user-verify.component';
import {VolunteerComponent} from './volunteer/volunteer.component';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json?cb=' + environment.i18n);
export function translateFactory(translate: TranslateService): any {
    return async () => {
        translate.setDefaultLang('en');
        translate.use('en');
        return new Promise<void>(resolve => {
            translate.onLangChange.subscribe(() => {
                resolve();
            });
        });
    };
}
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AboutComponent,
    AboutSectionComponent,
    AddMerchantDialogComponent,
    AddPosDialogComponent,
    AppComponent,
    ApplicationsAworldComponent,
    ApplicationsBalanceComponent,
    ApplicationsCodymazeComponent,
    ApplicationsComponent,
    ApplicationsLibrariesComponent,
    ApplicationsOverviewComponent,
    ApplicationsStepcounterComponent,
    ApplicationsUniversitiesComponent,
    BillingCancelComponent,
    BillingCheckoutComponent,
    BillingSuccessComponent,
    BreadcrumbsComponent,
    ContactFormComponent,
    ContactsComponent,
    FanoComponent,
    FooterComponent,
    HomeComponent,
    InstrumentComponent,
    JoinstringsPipe,
    LogInErrorDialogComponent,
    LogoutDialogComponent,
    ManageComponent,
    MerchantComponent,
    MerchantFormComponent,
    MerchantSignUpComponent,
    MerchantStatsComponent,
    NavComponent,
    PageNotFoundComponent,
    PosFormComponent,
    PrivacyComponent,
    PrivacyInstrumentComponent,
    PrivacyOverviewComponent,
    PrivacyPocketComponent,
    PrivacyPosComponent,
    PrivacyStepcounterComponent,
    PrivacyWebsiteComponent,
    ProgressSpinnerComponent,
    RequestNewPasswordComponent,
    ResetPasswordComponent,
    SignInComponent,
    UrbinoComponent,
    UserFormComponent,
    UserHomeComponent,
    UserMerchantComponent,
    UserNotVerifiedComponent,
    UserStatsComponent,
    UserVerifyComponent,
    VolunteerComponent,
  ],
  exports: [
  ],
    imports: [
        appRoutingModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'}
        ]),
        TranslateModule.forRoot({
            defaultLanguage: 'it',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        AppOverlayModule,
        BreadcrumbModule,
        BrowserAnimationsModule,
        BrowserModule,
        CarouselModule,
        CommonModule,
        FlexLayoutModule,
        FlexLayoutModule,
        FlexModule,
        FlexModule,
        FormsModule,
        GoogleMapsModule,
        GoogleMapsModule,
        HttpClientModule,
        NgxChartsModule,
        OverlayModule,
        ReactiveFormsModule,
        SharedModule,
        TranslateModule,
        TranslateModule,
    ],
  providers: [
      {
          provide: APP_INITIALIZER,
          useFactory: translateFactory,
          deps: [TranslateService],
          multi: true
      },
      isMock
      ? [{
          provide: HTTP_INTERCEPTORS,
          useClass: HttpMockRequestInterceptor,
          multi: true
        },
          CookieService
        ]
      : [{
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
          CookieService
        ]
  ],
  entryComponents: [ProgressSpinnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
