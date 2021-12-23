import {AuthGuard} from './_helpers/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {SignInComponent} from './authentication/signin/signin.component';
import {MerchantSignUpComponent} from './authentication/signup/signup.component';
import {MerchantDashboardComponent} from './merchant/dashboard/merchant-dashboard.component';
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
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'merchant',
    component: MerchantComponent
  },
  {
    path: 'instrument',
    component: InstrumentComponent
  },
  {
    path: 'user/merchant',
    component :  MerchantDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/not-verified',
    component: UserNotVerifiedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/home',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/verify',
    component: UserVerifyComponent,
  },
  {
    path: 'authentication/signin',
    component : SignInComponent
  },
  {
    path: 'authentication/signup',
    component : MerchantSignUpComponent
  },
  {
    path: 'authentication/reset-password',
    component : ResetPasswordComponent
  },
  {
    path: 'authentication/request-new-password',
    component : RequestNewPasswordComponent
  },
  {
    path: 'privacy',
    component : PrivacyComponent
  },
  {
    path: 'privacy/pos',
    component : PrivacyPosComponent
  },
  {
    path: 'privacy/pocket',
    component : PrivacyPocketComponent
  },
  {
    path: 'privacy/instrument',
    component : PrivacyInstrumentComponent
  },

  {
    path: '**',
    component : PageNotFoundComponent
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
