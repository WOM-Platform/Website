import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogCreateMerchant } from "./components/dialog-create-merchant/dialog-create-merchant";
import { AddPosDialogComponent } from "./components/dialog-create-pos/add-pos.component";

import { UserHomeComponent } from "./home/user-home.component";
import { UserNotVerifiedComponent } from "./not-verified/user-not-verified.component";
import { UserVerifyComponent } from "./verify/user-verify.component";
import { AuthRouting } from "./auth.routing";

import { FormMerchantComponent } from "./components/dialog-create-merchant/form-merchant/form-merchant.component";
import { PosFormComponent } from "../_forms/pos/forms-pos.directive";
import { MerchantStatsComponent } from "./stats/merchant/merchant-stats.component";
import { UserStatsComponent } from "./stats/user-stats.component";
import { MapComponent } from "../components/map/map.component";
import { SharedModule } from "../shared/shared.module";

import { UserAdminComponent } from "./admin/user-admin.component";
import { UserInstrumentsComponent } from "./instruments/user-instruments.component";
import { UserAccessListComponent } from "./components/user-access-list/user-access-list.component";
import { SearchSourceComponent } from "./components/user-access-list/search-source/search-source.component";
import { DialogViewEditInstrumentComponent } from "./instruments/dialog-view-edit-instrument/dialog-view-edit-instrument.component";
import { AdminTableComponent } from "./components/admin-table/admin-table.component";
import { AdminManagmentInstrumentsComponent } from "./instruments/admin-managment-instruments/admin-managment-instruments.component";
import { UserUsersComponent } from "./users/user-users.component";
import { MerchantsAdminComponent } from "./merchant/merchants-admin/merchants-admin.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { UserComponent } from "./user.component";
import { UserMerchantsComponent } from "./merchant/user-merchants.component";
import { UserAimsComponent } from "./aims/user-aims.component";
import { MerchantDetailComponent } from "./merchant/merchant-detail/merchant-detail.component";
import { UserAimsListComponent } from "./components/user-aims-list/user-aims-list.component";
import { MyInstrumentCollectionComponent } from "./instruments/my-instrument-collection-component/my-instrument-collection-component.component";

@NgModule({
  declarations: [
    AddPosDialogComponent,
    AdminManagmentInstrumentsComponent,
    DialogCreateMerchant,
    DialogViewEditInstrumentComponent,
    FormMerchantComponent,
    MapComponent,
    MerchantDetailComponent,
    MerchantStatsComponent,
    MyInstrumentCollectionComponent,
    PosFormComponent,
    UserAccessListComponent,
    UserAdminComponent,
    UserAimsComponent,
    UserAimsListComponent,
    UserComponent,
    UserHomeComponent,
    UserInstrumentsComponent,
    UserMerchantsComponent,
    UserNotVerifiedComponent,
    UserStatsComponent,
    UserUsersComponent,
    UserVerifyComponent,
  ],
  exports: [UserAccessListComponent],
  imports: [
    AdminTableComponent,
    AuthRouting,
    CommonModule,
    SharedModule,
    SearchSourceComponent,
    MerchantsAdminComponent,
    FiltersComponent,
  ],
})
export class AuthModule {}
