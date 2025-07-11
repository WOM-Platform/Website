import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserHomeComponent } from "./home/user-home.component";
import { UserMerchantsComponent } from "./merchants/user-merchants.component";
import { UserNotVerifiedComponent } from "./not-verified/user-not-verified.component";
import { UserVerifyComponent } from "./verify/user-verify.component";
import { AdminRoleComponent } from "./statistics/admin-role/admin-role.component";
import { UserComponent } from "./user.component";
import { UserInstrumentsComponent } from "./instruments/user-instruments.component";
import { UserAimsComponent } from "./aims/user-aims.component";
import { UserUsersComponent } from "./users/user-users.component";
import { MerchantDetailComponent } from "./merchants/merchant-detail/merchant-detail.component";
import { PosDetailsComponent } from "./merchants/pos-details/pos-details";
import { instrumentsGuard } from "../_helpers/instruments.guard";
import { authGuard } from "../_helpers/auth.guard";
import { UserStatisticsComponent } from "./statistics/user-statistics.component";
import { BadgesComponent } from "./badges/badges.component";
import { BadgeDetailComponent } from "./badges/badge-detail/badge-detail.component";
import { ChallengeDetailComponent } from "./badges/challenge-detail/challenge-detail.component";

const routes: Routes = [
  {
    path: "user",
    component: UserComponent,
    canActivate: [authGuard],
    data: {
      breadcrumb: "BREADCRUMBS.USER.USER",
      requiresAuth: true,
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
          requiresAuth: true,
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
          requiresAuth: true,
        },
      },
      {
        path: "badges",
        component: BadgesComponent,
        canActivate: [authGuard],
        data: { breadcrumb: "BREADCRUMBS.USER.BADGES", requiresAuth: true },
      },
      {
        path: "badges/:id",
        component: BadgeDetailComponent,
        canActivate: [authGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.BADGE_DETAIL",
          requiresAuth: true,
        },
      },
      {
        path: "badges/challenge/:id",
        component: ChallengeDetailComponent,
        canActivate: [authGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.CHALLENGE_DETAIL",
          requiresAuth: true,
        },
      },
      {
        path: "merchants",
        canActivate: [authGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.MERCHANT",
          requiresAuth: true,
        },
        children: [
          {
            path: "",
            component: UserMerchantsComponent,
            canActivate: [authGuard],
            data: {
              breadcrumb: "BREADCRUMBS.USER.HOME",
              requiresAuth: true,
            },
          },
          {
            path: ":id/:action",
            data: {
              breadcrumb: "BREADCRUMBS.USER.MERCHANT-DETAIL",
            },
            children: [
              {
                path: "",
                component: MerchantDetailComponent,
                pathMatch: "full",
              },

              {
                path: "pos/:posId/:posAction",
                component: PosDetailsComponent,
                data: {
                  breadcrumb: "BREADCRUMBS.USER.POS-DETAIL",
                },
              },
            ],
          },
        ],
      },
      {
        path: "instruments",
        component: UserInstrumentsComponent,
        canActivate: [authGuard, instrumentsGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.INSTRUMENT",
          requiresAuth: true,
        },
      },
      {
        path: "aims",
        component: UserAimsComponent,
        canActivate: [authGuard],
        data: {
          roles: ["Admin"],
          breadcrumb: "BREADCRUMBS.USER.AIM",
          requiresAuth: true,
        },
      },
      {
        path: "users",
        component: UserUsersComponent,
        canActivate: [authGuard],
        data: {
          roles: ["Admin"],
          breadcrumb: "BREADCRUMBS.USER.USERS",
          requiresAuth: true,
        },
      },
      {
        path: "statistics",
        component: UserStatisticsComponent,
        canActivate: [authGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.STATISTICS",
          requiresAuth: true,
        },
      },
      {
        path: "stats/admin",
        component: AdminRoleComponent,
        canActivate: [authGuard],
        data: {
          breadcrumb: "BREADCRUMBS.USER.ADMIN-STATS",
          requiresAuth: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouting {}
