import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {appRoutingModule} from './app.routing';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MerchantDashboardComponent} from './merchant/dashboard/merchant-dashboard.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {HttpMockRequestInterceptor} from './_helpers/HttpMockRequestInterceptor';

import {environment} from '../environments/environment';
import {TokenInterceptorService} from './_helpers/httpInterceptor';
import {UserHomeComponent} from './user/home/user-home.component';
import {PosFormComponent} from './_forms/pos/forms-pos.directive';
import {UserFormComponent} from "./_forms/user/forms-user.directive";
import {MerchantFormComponent} from "./_forms/merchant/forms-merchant.directive";
import {GoogleMapsModule} from "@angular/google-maps";

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');
export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    SignInComponent,
    MerchantSignUpComponent,
    MerchantDashboardComponent,
    PrivacyComponent,
    PrivacyInstrumentComponent,
    PrivacyPocketComponent,
    PrivacyPosComponent,
    UserHomeComponent,
    PosFormComponent,
    UserFormComponent,
    MerchantFormComponent
  ],
  exports: [
      MatStepperModule
  ],
  imports: [
    appRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
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
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [
    isMock
      ? [{
          provide: HTTP_INTERCEPTORS,
          useClass: HttpMockRequestInterceptor,
          multi: true
        }]
      : [{
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
