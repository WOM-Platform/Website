import {AuthGuard} from './_helpers/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {MerchantSignInComponent} from './merchant/signin/signin.component';
import {MerchantSignUpComponent} from './merchant/signup/signup.component';
import {MerchantDashboardComponent} from './merchant/dashboard/merchant-dashboard.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {PrivacyPosComponent} from './privacy/pos/pos.component';
import {PrivacyPocketComponent} from './privacy/pocket/pocket.component';
import {PrivacyInstrumentComponent} from './privacy/instrument/instrument.component';

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
    path: 'user/signin',
    component : MerchantSignInComponent
  },
  {
    path: 'user/signup',
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
