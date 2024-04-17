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
import {SourceAccessList} from "./components/source-access-list/source-access-list";
import {SearchSourceComponent} from "./components/source-access-list/search-source/search-source.component";
import {SourcesListComponent} from "./components/sources-list/sources-list.component";
import {DialogViewUserComponent} from "./components/dialog-view-user/dialog-view-user.component";

@NgModule({
    declarations: [
        AddMerchantDialogComponent,
        AddPosDialogComponent,
        SourceAccessList,
        DialogViewUserComponent,
        MapComponent,
        MerchantFormComponent,
        MerchantStatsComponent,
        PosFormComponent,
        UserAdminComponent,
        UserHomeComponent,
        UserInstrumentComponent,
        SourcesListComponent,
        UserMerchantComponent,
        UserNotVerifiedComponent,
        UserStatsComponent,
        UserVerifyComponent,
    ],
    exports: [
        SourceAccessList
    ],
    imports: [
        CommonModule,
        AuthRouting,
        SharedModule,
        SearchSourceComponent,
    ]
})
export class AuthModule {
}
