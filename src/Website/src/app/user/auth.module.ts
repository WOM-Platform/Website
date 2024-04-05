import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddMerchantDialogComponent} from './merchant/add-merchant/add-merchant.component';
import {AddPosDialogComponent} from './merchant/add-pos/add-pos.component';

import {UserHomeComponent} from './home/user-home.component';
import {UserMerchantComponent} from './merchant/user-merchant.component';
import {UserNotVerifiedComponent} from './not-verified/user-not-verified.component';
import {UserVerifyComponent} from './verify/user-verify.component';
import {AuthRouting} from './auth.routing';

import {MerchantFormComponent} from '../_forms/merchant/forms-merchant.directive';
import {PosFormComponent} from '../_forms/pos/forms-pos.directive';
import {MerchantStatsComponent} from './stats/merchant/merchant-stats.component';
import {UserStatsComponent} from './stats/user-stats.component';
import {MapComponent} from '../components/map/map.component';
import {SharedModule} from '../shared/shared.module';

import {UserAdminComponent} from './admin/user-admin.component';
import {UserInstrumentComponent} from './instrument/user-instrument.component';
import {CreateInstrumentDialogComponent} from "./admin/create-instrument-dialog/create-instrument-dialog.component";

@NgModule({
    declarations: [
        AddMerchantDialogComponent,
        AddPosDialogComponent,
        CreateInstrumentDialogComponent,
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
        AuthRouting,
        SharedModule,
    ]
})
export class AuthModule {
}
