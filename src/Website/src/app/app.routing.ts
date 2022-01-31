import {AuthGuard} from './_helpers/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {SignInComponent} from './authentication/signin/signin.component';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';
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
        path: 'privacy',
        component : PrivacyComponent,
        data: {
          breadcrumb: 'BREADCRUMBS.PRIVACY.PRIVACY'
        },
        children: [
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
