<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddMerchantDialogComponent} from './merchant/add-merchant/add-merchant.component';
import {AddPosDialogComponent} from './merchant/add-pos/add-pos.component';
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMerchantDialogComponent } from './merchant/add-merchant/add-merchant.component';
import { AddPosDialogComponent } from './merchant/add-pos/add-pos.component';
>>>>>>> origin/dev

import {UserHomeComponent} from './home/user-home.component';
import {UserMerchantComponent} from './merchant/user-merchant.component';
import {UserNotVerifiedComponent} from './not-verified/user-not-verified.component';
import {UserVerifyComponent} from './verify/user-verify.component';
import {AuthRouting} from './auth.routing';

<<<<<<< HEAD
import {MerchantFormComponent} from '../_forms/merchant/forms-merchant.directive';
import {PosFormComponent} from '../_forms/pos/forms-pos.directive';
import {MerchantStatsComponent} from './stats/merchant/merchant-stats.component';
import {UserStatsComponent} from './stats/user-stats.component';
import {MapComponent} from '../components/map/map.component';
import {SharedModule} from '../shared/shared.module';

import {UserAdminComponent} from './admin/user-admin.component';
import {UserInstrumentComponent} from './instrument/user-instrument.component';
import {DataAccessComponent} from "./components/data-access/data-access.component";
import {SearchSourceComponent} from "./components/data-access/search-source/search-source.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {DialogViewUserComponent} from "./components/dialog-view-user/dialog-view-user.component";

@NgModule({
    declarations: [
        AddMerchantDialogComponent,
        AddPosDialogComponent,
        DataAccessComponent,
        DialogViewUserComponent,
        MapComponent,
        MerchantFormComponent,
        MerchantStatsComponent,
        PosFormComponent,
        UserAdminComponent,
        UserHomeComponent,
        UserInstrumentComponent,
        UsersListComponent,
        UserMerchantComponent,
        UserNotVerifiedComponent,
        UserStatsComponent,
        UserVerifyComponent,
    ],
    exports: [
        DataAccessComponent
    ],
    imports: [
        CommonModule,
        AuthRouting,
        SharedModule,
        SearchSourceComponent,
    ]
=======
import { MerchantFormComponent } from '../_forms/merchant/forms-merchant.directive';
import { PosFormComponent } from '../_forms/pos/forms-pos.directive';
import { MerchantStatsComponent } from './stats/merchant/merchant-stats.component';
import { UserStatsComponent } from './stats/user-stats.component';
import { MapComponent } from '../components/map/map.component';
import { SharedModule } from '../shared/shared.module';
import { InstrumentComponent } from './stats/instrument/instrument.component';
import { AdminComponent } from './stats/admin/admin.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserInstrumentComponent } from './user-instrument/user-instrument.component';

@NgModule({
  declarations: [
    AddMerchantDialogComponent,
    AddPosDialogComponent,
    AdminComponent,
    InstrumentComponent,
    MapComponent,
    MerchantFormComponent,
    MerchantStatsComponent,
    PosFormComponent,
    UserAdminComponent,
    UserHomeComponent,
    UserInstrumentComponent,
    UserMerchantComponent,
    UserNotVerifiedComponent,
    UserStatsComponent,
    UserVerifyComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
>>>>>>> origin/dev
})
export class AuthModule {
}
