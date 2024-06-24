import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {UserHomeComponent} from "./home/user-home.component";
import {UserNotVerifiedComponent} from "./not-verified/user-not-verified.component";
import {UserVerifyComponent} from "./verify/user-verify.component";
import {AuthRouting} from "./auth.routing";

import {FormMerchantComponent} from "./merchants/dialog-create-merchant/form-merchant/form-merchant.component";
import {PosFormComponent} from "../_forms/pos/forms-pos.directive";
import {MerchantStatsComponent} from "./stats/merchant/merchant-stats.component";
import {UserStatsComponent} from "./stats/user-stats.component";
import {SharedModule} from "../shared/shared.module";

import {UserAdminComponent} from "./admin/user-admin.component";
import {UserInstrumentsComponent} from "./instruments/user-instruments.component";
import {UserAccessListComponent} from "./components/user-access-list/user-access-list.component";
import {SearchSourceComponent} from "./components/user-access-list/search-source/search-source.component";
import {
    DialogViewEditInstrumentComponent
} from "./instruments/dialog-view-edit-instrument/dialog-view-edit-instrument.component";
import {AdminTableComponent} from "./components/admin-table/admin-table.component";
import {
    AdminManagmentInstrumentsComponent
} from "./instruments/admin-managment-instruments/admin-managment-instruments.component";
import {UserUsersComponent} from "./users/user-users.component";
import {MerchantsAdminComponent} from "./merchants/merchants-admin/merchants-admin.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {UserComponent} from "./user.component";
import {UserMerchantsComponent} from "./merchants/user-merchants.component";
import {UserAimsComponent} from "./aims/user-aims.component";
import {MerchantDetailComponent} from "./merchants/merchant-detail/merchant-detail.component";
import {UserAimsListComponent} from "./components/user-aims-list/user-aims-list.component";
import {
    MyInstrumentsCollectionComponent
} from "./instruments/my-instruments-collection/my-instruments-collection.component";
import {DialogCreateMerchant} from "./merchants/dialog-create-merchant/dialog-create-merchant.component";
import {MyMerchantsCollectionComponent} from "./merchants/my-merchants-collection/my-merchants-collection.component";
import {ExpandableCardComponent} from "./components/expandable-card/expandable-card.component";
import {EditableElementComponent} from "./components/editable-element/editable-element.component";
import {DialogCreateSourceComponent} from "./instruments/dialog-create-instrument/dialog-create-instrument.component";
import {AccessListComponent} from "./components/access-list/access-list.component";
import {AimsListComponent} from "./components/aims-list/aims-list.component";
import {PosDetailsComponent} from "./merchants/pos-details/pos-details";
import {UserPosListComponent} from "./merchants/user-pos-list/user-pos-list.component";

@NgModule({
    declarations: [
        AdminManagmentInstrumentsComponent,
        DialogCreateMerchant,
        DialogCreateSourceComponent,
        DialogViewEditInstrumentComponent,
        FormMerchantComponent,
        MerchantDetailComponent,
        MerchantStatsComponent,
        MyInstrumentsCollectionComponent,
        MyMerchantsCollectionComponent,
        UserAdminComponent,
        UserAimsComponent,
        UserComponent,
        UserHomeComponent,
        UserInstrumentsComponent,
        UserMerchantsComponent,
        UserNotVerifiedComponent,
        UserStatsComponent,
        UserUsersComponent,
        UserVerifyComponent,

    ],
    imports: [
        AccessListComponent,
        AdminTableComponent,
        AimsListComponent,
        AuthRouting,
        CommonModule,
        EditableElementComponent,
        ExpandableCardComponent,
        SharedModule,
        PosDetailsComponent,
        PosFormComponent,
        SearchSourceComponent,
        MerchantsAdminComponent,
        FiltersComponent,
        UserAccessListComponent,
        UserPosListComponent,
        UserAimsListComponent,
    ]
})
export class AuthModule {
}
