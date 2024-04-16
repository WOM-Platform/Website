import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../_helpers/auth.guard';
import {ManageGuard} from '../_helpers/manage.guard';
import {ManageComponent} from '../manage/manage/manage.component';
import {UserHomeComponent} from './home/user-home.component';
import {UserMerchantComponent} from './merchant/user-merchant.component';
import {UserNotVerifiedComponent} from './not-verified/user-not-verified.component';
import {UserVerifyComponent} from './verify/user-verify.component';
import {UserStatsComponent} from './stats/user-stats.component';
import {MerchantStatsComponent} from "./stats/merchant/merchant-stats.component";
import {AdminStatsComponent} from "./stats/admin/admin-stats.component";
import {InstrumentStatsComponent} from "./stats/instrument/instrument-stats.component";

const routes: Routes = [
    {
        path: 'user',
        data: {
            breadcrumb: 'BREADCRUMBS.USER.USER'
        },
        children: [
            {
                path: '',
                component: UserHomeComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.HOME'
                }
            },
            {
                path: 'not-verified',
                component: UserNotVerifiedComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.ERROR'
                }
            },
            {
                path: 'verify',
                component: UserVerifyComponent,
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.VERIFY'
                }
            },
            {
                path: 'home',
                component: UserHomeComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.HOME'
                }
            },
            {
                path: 'merchant',
                component: UserMerchantComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.MERCHANT'
                }
            },
            {
                path: 'stats/admin',
                component: AdminStatsComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.ADMIN-STATS'
                }
            },
            {
                path: 'stats/merchant/:id',
                component: MerchantStatsComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.MERCHANT-STATS'
                }
            },
            {
                path: 'stats/instrument',
                component: InstrumentStatsComponent,
                canActivate: [AuthGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.USER.INSTRUMENT-STATS'
                }
            },
            {
                path: 'manage',
                canActivate: [AuthGuard, ManageGuard],
                data: {
                    breadcrumb: 'BREADCRUMBS.MANAGE.TITLE'
                },
                children: [
                    {
                        path: '',
                        component: ManageComponent,
                        canActivate: [AuthGuard, ManageGuard],
                        data: {
                            breadcrumb: 'BREADCRUMBS.MANAGE.HOME'
                        }
                    }
                ]
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRouting {
}