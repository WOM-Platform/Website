import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMerchantDialogComponent } from './add-merchant/add-merchant.component';
import { AddPosDialogComponent } from './add-pos/add-pos.component';

import { UserHomeComponent } from './home/user-home.component';
import { UserMerchantComponent } from './merchant/user-merchant.component';
import { UserNotVerifiedComponent } from './not-verified/user-not-verified.component';
import { UserVerifyComponent } from './verify/user-verify.component';
import { AuthRoutingModule } from './auth-routing.module';

import { MerchantFormComponent } from '../_forms/merchant/forms-merchant.directive';
import { PosFormComponent } from '../_forms/pos/forms-pos.directive';
import { MerchantStatsComponent } from './stats/merchant/merchant-stats.component';
import { UserStatsComponent } from './stats/user-stats.component';
import { MapComponent } from '../components/map/map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddMerchantDialogComponent,
    AddPosDialogComponent,
    MapComponent,
    MerchantStatsComponent,     
    MerchantFormComponent,
    PosFormComponent,
    UserHomeComponent,
    UserMerchantComponent,
    UserNotVerifiedComponent,
    UserStatsComponent,
    UserVerifyComponent,],
  imports: [
    CommonModule, 
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
