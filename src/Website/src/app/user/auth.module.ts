import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DialogCreateMerchant} from "./components/dialog-create-merchant/dialog-create-merchant";
import {AddPosDialogComponent} from "./components/dialog-create-pos/add-pos.component";

import {UserHomeComponent} from "./home/user-home.component";
import {UserNotVerifiedComponent} from "./not-verified/user-not-verified.component";
import {UserVerifyComponent} from "./verify/user-verify.component";
import {AuthRouting} from "./auth.routing";

import {FormMerchantComponent} from "./components/dialog-create-merchant/form-merchant/form-merchant.component";
import {PosFormComponent} from "../_forms/pos/forms-pos.directive";
import {MerchantStatsComponent} from "./stats/merchant/merchant-stats.component";
import {UserStatsComponent} from "./stats/user-stats.component";
import {MapComponent} from "../components/map/map.component";
import {SharedModule} from "../shared/shared.module";

import {UserAdminComponent} from "./admin/user-admin.component";
import {UserInstrumentsComponent} from "./instruments/user-instruments.component";
import {SourceAccessList} from "./components/source-access-list/source-access-list";
import {SearchSourceComponent} from "./components/source-access-list/search-source/search-source.component";
import {DialogViewUserComponent} from "./components/dialog-view-user/dialog-view-user.component";
import {AdminTableComponent} from "./components/admin-table/admin-table.component";
import {InstrumentsTabComponent} from "./instruments/instruments-tab/instruments-tab.component";
import {UserUsersComponent} from "./users/user-users.component";
import {MerchantsTabComponent} from "./merchant/merchants-tab/merchants-tab.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {UserComponent} from "./user.component";
import {UserMerchantsComponent} from "./merchant/user-merchants.component";
import {UserAimsComponent} from "./aims/user-aims.component";

@NgModule({
    declarations: [
        UserAimsComponent,
        DialogCreateMerchant,
        AddPosDialogComponent,
        SourceAccessList,
        DialogViewUserComponent,
        InstrumentsTabComponent,
        MapComponent,
        FormMerchantComponent,
        MerchantStatsComponent,
        PosFormComponent,
        UserAdminComponent,
        UserHomeComponent,
        UserMerchantsComponent,
        UserInstrumentsComponent,
        UserNotVerifiedComponent,
        UserStatsComponent,
        UserComponent,
        UserUsersComponent,
        UserVerifyComponent,
    ],
    exports: [SourceAccessList],
    imports: [
        AdminTableComponent,
        AuthRouting,
        CommonModule,
        SharedModule,
        SearchSourceComponent,
        MerchantsTabComponent,
        FiltersComponent,
    ],
})
export class AuthModule {
}
