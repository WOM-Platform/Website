import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ManageGuard} from "../_helpers/manage.guard";
import {ManageComponent} from "../manage/manage/manage.component";
import {UserHomeComponent} from "./home/user-home.component";
import {UserMerchantsComponent} from "./merchants/user-merchants.component";
import {UserNotVerifiedComponent} from "./not-verified/user-not-verified.component";
import {UserVerifyComponent} from "./verify/user-verify.component";
import {MerchantStatsComponent} from "./statistics/merchant/merchant-stats.component";
import {AdminRoleComponent} from "./statistics/admin-role/admin-role.component";
import {InstrumentStatsComponent} from "./statistics/instrument/instrument-stats.component";
import {UserComponent} from "./user.component";
import {UserInstrumentsComponent} from "./instruments/user-instruments.component";
import {UserAimsComponent} from "./aims/user-aims.component";
import {UserUsersComponent} from "./users/user-users.component";
import {MerchantDetailComponent} from "./merchants/merchant-detail/merchant-detail.component";
import {PosDetailsComponent} from "./merchants/pos-details/pos-details";
import {instrumentsGuard} from "../_helpers/instruments.guard";
import {authGuard} from "../_helpers/auth.guard";
import {UserStatisticsComponent} from "./statistics/user-statistics.component";

const routes: Routes = [
    {
        path: "user",
        component: UserComponent,
        canActivate: [authGuard],
        data: {
            breadcrumb: "BREADCRUMBS.USER.USER",
        },
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: "not-verified",
                component: UserNotVerifiedComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.ERROR",
                },
            },
            {
                path: "verify",
                component: UserVerifyComponent,
                data: {
                    breadcrumb: "BREADCRUMBS.USER.VERIFY",
                },
            },
            {
                path: "home",
                component: UserHomeComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.HOME",
                },
            },
            {
                path: "merchants",
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.MERCHANT",
                },
                children: [
                    {
                        path: "",
                        component: UserMerchantsComponent,
                        canActivate: [authGuard],
                        data: {
                            breadcrumb: "BREADCRUMBS.USER.HOME",
                        },
                    },
                    {
                        path: ':id/:action',
                        data: {
                            breadcrumb: 'BREADCRUMBS.USER.MERCHANT-DETAIL',
                        },
                        children: [
                            {path: '', component: MerchantDetailComponent, pathMatch: 'full'},

                            {
                                path: 'pos/:posId/:posAction', component: PosDetailsComponent,
                                data: {
                                    breadcrumb: 'BREADCRUMBS.USER.POS-DETAIL',
                                },
                            }
                        ]
                    },
                ],
            },
            {
                path: "instruments",
                component: UserInstrumentsComponent,
                canActivate: [authGuard, instrumentsGuard],
                data: {

                    breadcrumb: "BREADCRUMBS.USER.INSTRUMENT",
                },
            },
            {
                path: "aims",
                component: UserAimsComponent,
                canActivate: [authGuard],
                data: {
                    roles: ['Admin'],
                    breadcrumb: "BREADCRUMBS.USER.AIM",
                },
            },
            {
                path: "users",
                component: UserUsersComponent,
                canActivate: [authGuard],
                data: {
                    roles: ['Admin'],
                    breadcrumb: "BREADCRUMBS.USER.USERS",
                },
            },
            {
                path: "statistics",
                component: UserStatisticsComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.STATISTICS"
                }
            },
            {
                path: "stats/admin",
                component: AdminRoleComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.ADMIN-STATS",
                },
            },
            {
                path: "stats/merchant/:id",
                component: MerchantStatsComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.MERCHANT-STATS",
                },
            },
            {
                path: "stats/instrument",
                component: InstrumentStatsComponent,
                canActivate: [authGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.USER.INSTRUMENT-STATS",
                },
            },
            {
                path: "manage",
                canActivate: [authGuard, ManageGuard],
                data: {
                    breadcrumb: "BREADCRUMBS.MANAGE.TITLE",
                },
                children: [
                    {
                        path: "",
                        component: ManageComponent,
                        canActivate: [authGuard, ManageGuard],
                        data: {
                            breadcrumb: "BREADCRUMBS.MANAGE.HOME",
                        },
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRouting {
}
