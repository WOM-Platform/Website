import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {appRoutingModule} from './app.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomeComponent} from './home';
import {NavComponent} from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {SignInComponent} from './authentication/signin/signin.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {HttpMockRequestInterceptor} from './_helpers/HttpMockRequestInterceptor';

import {environment} from '../environments/environment';
import {TokenInterceptorService} from './_helpers/httpInterceptor';
import {UserHomeComponent} from './user/home/user-home.component';
import {PosFormComponent} from './_forms/pos/forms-pos.directive';
import {UserFormComponent} from './_forms/user/forms-user.directive';
import {MerchantFormComponent} from './_forms/merchant/forms-merchant.directive';
import {ProgressSpinnerComponent} from './_progressSpinner/progress-spinner.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {AppOverlayModule} from './_overlay/overlay.module';
import {UserNotVerifiedComponent} from './user/not-verified/user-not-verified.component';
import {AddMerchantDialogComponent} from './user/add-merchant/add-merchant.component';
import {AddPosDialogComponent} from './user/add-pos/add-pos.component';
import {CookieService} from 'ngx-cookie-service';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {LogInErrorDialogComponent} from './authentication/signup/signup-login-error.directive';
import {UserVerifyComponent} from './user/verify/user-verify.component';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {RequestNewPasswordComponent} from './authentication/requestNewPassword/request-new-password.component';
import {MerchantComponent} from './merchant/merchant.component';
import {InstrumentComponent} from './instrument/instrument.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {AboutComponent} from './about/about.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GoogleMapsModule } from '@angular/google-maps';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CommonModule} from '@angular/common';
import {StepcounterTcComponent} from './privacy/stepCounter/tc/stepcounter_tc.component';
import {StepcounterPrivacyComponent} from './privacy/stepCounter/privacy/stepcounter_privacy.component';


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
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    SignInComponent,
    MerchantSignUpComponent,
    PrivacyComponent,
    PrivacyInstrumentComponent,
    PrivacyPocketComponent,
    PrivacyPosComponent,
    UserHomeComponent,
    PosFormComponent,
    UserFormComponent,
    MerchantFormComponent,
    ProgressSpinnerComponent,
    UserNotVerifiedComponent,
    AddMerchantDialogComponent,
    AddPosDialogComponent,
    ResetPasswordComponent,
    LogInErrorDialogComponent,
    UserVerifyComponent,
    RequestNewPasswordComponent,
    PageNotFoundComponent,
    MerchantComponent,
    InstrumentComponent,
    VolunteerComponent,
    AboutComponent,
    BreadcrumbsComponent,
    StepcounterTcComponent,
    StepcounterPrivacyComponent
  ],
  exports: [
      MatStepperModule,
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
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatMenuModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatCardModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatStepperModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        FormsModule,
        GoogleMapsModule,
        OverlayModule,
        AppOverlayModule,
        TranslateModule,
        MatButtonModule,
        MatButtonModule,
        TranslateModule,
        MatGridListModule,
        MatGridListModule,
        GoogleMapsModule,
        FlexModule,
        FlexLayoutModule,
        FlexModule,
        MatButtonModule,
        BreadcrumbModule,
        MatDividerModule,
        CommonModule
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
