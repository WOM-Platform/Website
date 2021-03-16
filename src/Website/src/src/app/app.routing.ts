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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'merchant',
    component :  MerchantDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/not-verified',
    component: UserNotVerifiedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/home',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
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
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
