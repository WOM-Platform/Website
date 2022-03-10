import {AuthGuard} from './_helpers/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {SignInComponent} from './authentication/signin/signin.component';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';
import {PrivacyStepcounterComponent} from './privacy/stepcounter/stepcounter.component';
import {UserHomeComponent} from './user/home/user-home.component';
import {UserNotVerifiedComponent} from './user/not-verified/user-not-verified.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {UserVerifyComponent} from './user/verify/user-verify.component';
import {PageNotFoundComponent} from './pageNotFound/page-not-found.component';
import {RequestNewPasswordComponent} from './authentication/requestNewPassword/request-new-password.component';
import {MerchantComponent} from './merchant/merchant.component';
import {VolunteerComponent} from './volunteer/volunteer.component';
import {InstrumentComponent} from './instrument/instrument.component';
import {AboutComponent} from './about/about.component';
import {ApplicationsComponent} from './applications/applications.component';
import {ApplicationsStepcounterComponent} from './applications/stepcounter/stepcounter.component';
import {PrivacyOverviewComponent} from "./privacy/overview/overview.component";
import {ApplicationsOverviewComponent} from "./applications/overview/overview.component";
import {ApplicationsUniversitiesComponent} from "./applications/universities/universities.component";
import {ApplicationsAworldComponent} from "./applications/aworld/aworld.component";
import {ApplicationsCodymazeComponent} from "./applications/codymaze/codymaze.component";
import {ApplicationsBalanceComponent} from "./applications/balance/balance.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        data: {
          breadcrumb: null
        }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.HOME'
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.ABOUT'
        },
      },
      {
        path: 'volunteer',
        component: VolunteerComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.VOLUNTEER'
        },
      },
      {
        path: 'merchant',
        component: MerchantComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.MERCHANT'
        },
      },
      {
        path: 'instrument',
        component: InstrumentComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.INSTRUMENT'
        },
      },
      {
        path: 'user',
        data: {
          breadcrumb: 'BREADCRUMBS.USER.USER'
        },
        children: [
          {
            path: 'not-verified',
            component: UserNotVerifiedComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.ERROR'
            }
          },
          {
            path: 'home',
            component: UserHomeComponent,
            canActivate: [AuthGuard],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.HOME'
            }
          },
          {
            path: 'verify',
            component: UserVerifyComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.USER.VERIFY'
            }
          },
        ]
      },
      {
        path: 'authentication',
        data: {
          breadcrumb: 'BREADCRUMBS.AUTHENTICATION.AUTHENTICATION'
        },
        children: [
          {
            path: 'signin',
            component : SignInComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.SIGNIN'
            }
          },
          {
            path: 'signup',
            component : MerchantSignUpComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.SIGNUP'
            }
          },
          {
            path: 'reset-password',
            component : ResetPasswordComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.RESET_PASSWORD'
            }
          },
          {
            path: 'request-new-password',
            component : RequestNewPasswordComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.NEW_PASSWORD'
            }
          },
        ]
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.APPLICATIONS.APPLICATIONS'
        },
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full"
          },
          {
            path: 'overview',
            component: ApplicationsOverviewComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.OVERVIEW'
            },
          },
          {
            path: 'stepcounter',
            component: ApplicationsStepcounterComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.STEPCOUNTER'
            },
          },
          {
            path: 'universities',
            component: ApplicationsUniversitiesComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.UNIVERSITIES'
            },
          },
          {
            path: 'aworld',
            component: ApplicationsAworldComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.AWORLD'
            }
          },
          {
            path: 'codymaze',
            component: ApplicationsCodymazeComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.CODYMAZE'
            }
          },
          {
            path: 'balance',
            component: ApplicationsBalanceComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.APPLICATIONS.BALANCE'
            },
          }
        ]
      },
      {
        path: 'privacy',
        component : PrivacyComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.PRIVACY.PRIVACY'
        },
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full"
          },
          {
            path: 'overview',
            component : PrivacyOverviewComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.OVERVIEW'
            },
          },
          {
            path: 'pos',
            component : PrivacyPosComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.POS'
            },
          },
          {
            path: 'pocket',
            component : PrivacyPocketComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.POCKET'
            },
          },
          {
            path: 'instrument',
            component : PrivacyInstrumentComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.INSTRUMENT'
            },
          },
          {
            path: 'stepcounter',
            component : PrivacyStepcounterComponent,
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.STEPCOUNTER'
            },
          }
        ]
      },
      {
        path: '**',
        component : PageNotFoundComponent
      }
    ]
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
