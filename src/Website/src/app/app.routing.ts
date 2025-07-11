import { FanoComponent } from "./pages/about/fano/fano.component";
import { AboutComponent } from "./pages/about/about/about.component";
import { AboutSectionComponent } from "./pages/about/about-section.component";
import { ApplicationsAworldComponent } from "./pages/users/applications/aworld/aworld.component";
import { ApplicationsBalanceComponent } from "./pages/users/applications/balance/balance.component";
import { ApplicationsCodymazeComponent } from "./pages/users/applications/codymaze/codymaze.component";
import { ApplicationsComponent } from "./pages/users/applications/applications.component";
import { ApplicationsLibrariesComponent } from "./pages/users/applications/libraries/libraries.component";
import { ApplicationsOverviewComponent } from "./pages/users/applications/overview/overview.component";
import { ApplicationsWomFitComponent } from "./pages/users/applications/womfit/womfit.component";
import { ApplicationsUniversitiesComponent } from "./pages/users/applications/universities/universities.component";
import { HomeComponent } from "./pages/home";
import { InstrumentComponent } from "./pages/instrument/instrument.component";
import { MerchantComponent } from "./pages/merchant/merchant.component";
import { MerchantSignUpComponent } from "./authentication/signup/signup.component";
import { PageNotFoundComponent } from "./pageNotFound/page-not-found.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { PrivacyInstrumentComponent } from "./pages/privacy/instrument/instrument.component";
import { PrivacyOverviewComponent } from "./pages/privacy/overview/overview.component";
import { PrivacyPocketComponent } from "./pages/privacy/pocket/pocket.component";
import { PrivacyPosComponent } from "./pages/privacy/pos/pos.component";
import { PrivacyWomFitComponent } from "./pages/privacy/womFit/womFit.component";
import { PrivacyWebsiteComponent } from "./pages/privacy/website/website.component";
import { RequestNewPasswordComponent } from "./authentication/requestNewPassword/request-new-password.component";
import { ResetPasswordComponent } from "./authentication/reset-password/reset-password.component";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./authentication/signin/signin.component";
import { UrbinoComponent } from "./pages/about/urbino/urbino.component";
import { UsersComponent } from "./pages/users/users/users.component";
import { ReteDelleRetiComponent } from "./pages/projects/rete-delle-reti/rete-delle-reti-component";
import { Pesaro2024Component } from "./pages/pesaro2024-section/pesaro2024/pesaro2024.component";
import { Pesaro2024SectionComponent } from "./pages/pesaro2024-section/pesaro2024-section.component";
import { TuristiComponent } from "./pages/pesaro-section/turisti/turisti.component";
import { CittadiniComponent } from "./pages/pesaro-section/cittadini/cittadini.component";
import { VolontarxComponent } from "./pages/pesaro2024-section/volontarx/volontarx.component";
import { AlbergatoriComponent } from "./pages/pesaro-section/albergatori/albergatori.component";
import { Sharper2024Component } from "./pages/uniurb/sharper2024/sharper2024.component";
import { PesaroComponent } from "./pages/pesaro-section/pesaro/pesaro.component";
import { pesaro2024RedirectGuard } from "./_helpers/pesaro2024-redirect.guard";
import { EsercentiComponent } from "./pages/pesaro-section/esercenti/esercenti.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { ChallengeComponent } from "./pages/challenge/challenge.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "challenge",
        component: ChallengeComponent,
        data: {
          breadcrumb: "BREADCRUMBS.CHALLENGE",
        },
      },
      {
        path: "faq",
        component: FaqComponent,
        data: {
          breadcrumb: "BREADCRUMBS.FAQ",
        },
      },
      {
        path: "about-section",
        component: AboutSectionComponent,
        data: {
          breadcrumb: "BREADCRUMBS.ABOUT.TITLE",
        },
        children: [
          {
            path: "",
            redirectTo: "about",
            pathMatch: "full",
          },
          {
            path: "about",
            component: AboutComponent,
            pathMatch: "full",
            data: {
              breadcrumb: "BREADCRUMBS.ABOUT.ABOUT",
            },
          },
          {
            path: "urbino",
            component: UrbinoComponent,
            pathMatch: "full",
            data: {
              breadcrumb: "BREADCRUMBS.ABOUT.URBINO",
            },
          },
          {
            path: "fano",
            component: FanoComponent,
            pathMatch: "full",
            data: {
              breadcrumb: "BREADCRUMBS.ABOUT.FANO",
            },
          },
        ],
      },
      {
        path: "pesaro",

        children: [
          {
            path: "",
            pathMatch: "full",
            component: PesaroComponent,
          },
          {
            path: "albergatori",
            component: AlbergatoriComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO.HOTELIERS",
            },
          },
          {
            path: "albergatori",
            component: AlbergatoriComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO.HOTELIERS",
            },
          },
          {
            path: "esercenti",
            component: EsercentiComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO.MERCHANTS",
            },
          },
          {
            path: "turisti",
            component: TuristiComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO.TOURISTS",
            },
          },
          {
            path: "cittadini",
            component: CittadiniComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO.CITIZENS",
            },
          },
        ],
      },
      {
        path: "pesaro2024",
        component: Pesaro2024SectionComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO2024.PESARO2024",
        },
        children: [
          {
            path: "",
            component: Pesaro2024Component,
          },
          {
            path: "volontarx",
            component: VolontarxComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PESARO2024.VOLUNTEERS",
            },
          },
          {
            path: ":childPath",
            canActivate: [pesaro2024RedirectGuard],
            component: Pesaro2024Component,
          },
        ],
      },
      {
        path: "projects",
        component: ReteDelleRetiComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PROJECTS.RETE-DELLE-RETI",
        },
        children: [
          {
            path: "rete-delle-reti",
            component: ReteDelleRetiComponent,
            pathMatch: "full",
            data: {
              breadcrumb: "BREADCRUMBS.PROJECTS.RETE-DELLE-RETI",
            },
          },
        ],
      },
      // TEMPORARY SOLUTION: not children path for uniurb to have the redirect on the only page present: sharper2024
      {
        path: "uniurb",
        redirectTo: "uniurb/sharper2024",
        pathMatch: "full",
      },
      {
        path: "uniurb/sharper2024",
        component: Sharper2024Component,
        data: {
          breadcrumb: "BREADCRUMBS.UNIURB.SHARPER2024",
        },
      },
      {
        path: "users",
        component: UsersComponent,
        data: {
          breadcrumb: "BREADCRUMBS.USERS",
        },
      },
      {
        path: "merchant",
        component: MerchantComponent,
        data: {
          breadcrumb: "BREADCRUMBS.MERCHANT",
        },
      },
      {
        path: "instrument",
        component: InstrumentComponent,
        data: {
          breadcrumb: "BREADCRUMBS.INSTRUMENT",
        },
      },
      {
        path: "authentication",
        data: {
          breadcrumb: "BREADCRUMBS.AUTHENTICATION.AUTHENTICATION",
        },
        children: [
          {
            path: "signin",
            component: SignInComponent,
            data: {
              breadcrumb: "BREADCRUMBS.AUTHENTICATION.SIGNIN",
            },
          },
          {
            path: "signup",
            component: MerchantSignUpComponent,
            data: {
              breadcrumb: "BREADCRUMBS.AUTHENTICATION.SIGNUP",
            },
          },
          {
            path: "reset-password",
            component: ResetPasswordComponent,
            data: {
              breadcrumb: "BREADCRUMBS.AUTHENTICATION.RESET_PASSWORD",
            },
          },
          {
            path: "request-new-password",
            component: RequestNewPasswordComponent,
            data: {
              breadcrumb: "BREADCRUMBS.AUTHENTICATION.NEW_PASSWORD",
            },
          },
        ],
      },
      {
        path: "applications",
        component: ApplicationsComponent,
        data: {
          breadcrumb: "BREADCRUMBS.APPLICATIONS.APPLICATIONS",
        },
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full",
          },
          {
            path: "overview",
            component: ApplicationsOverviewComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.OVERVIEW",
            },
          },
          {
            path: "womfit",
            component: ApplicationsWomFitComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.WOMFIT",
            },
          },
          {
            path: "libraries",
            component: ApplicationsLibrariesComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.LIBRARIES",
            },
          },
          {
            path: "universities",
            component: ApplicationsUniversitiesComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.UNIVERSITIES",
            },
          },
          {
            path: "aworld",
            component: ApplicationsAworldComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.AWORLD",
            },
          },
          {
            path: "codymaze",
            component: ApplicationsCodymazeComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.CODYMAZE",
            },
          },
          {
            path: "balance",
            component: ApplicationsBalanceComponent,
            data: {
              breadcrumb: "BREADCRUMBS.APPLICATIONS.BALANCE",
            },
          },
        ],
      },
      {
        path: "privacy",
        component: PrivacyComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.PRIVACY",
        },
        children: [
          {
            path: "",
            redirectTo: "overview",
            pathMatch: "full",
          },
          {
            path: "overview",
            component: PrivacyOverviewComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.OVERVIEW",
            },
          },
          {
            path: "website",
            component: PrivacyWebsiteComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.WEBSITE",
            },
          },
          {
            path: "pos",
            component: PrivacyPosComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.POS",
            },
          },
          {
            path: "pocket",
            component: PrivacyPocketComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.POCKET",
            },
          },
          {
            path: "instrument",
            component: PrivacyInstrumentComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.INSTRUMENT",
            },
          },
          {
            path: "womfit",
            component: PrivacyWomFitComponent,
            data: {
              breadcrumb: "BREADCRUMBS.PRIVACY.WOMFIT",
            },
          },
        ],
      },
      /*{
                    path: "billing",
                    data: {
                      breadcrumb: "BREADCRUMBS.BILLING.TITLE",
                    },
                    children: [
                      {
                        path: "",
                        redirectTo: "checkout",
                        pathMatch: "full",
                      },
                      {
                        path: "checkout",
                        component: BillingCheckoutComponent,
                        data: {
                          breadcrumb: "BREADCRUMBS.BILLING.CHECKOUT",
                        },
                      },
                      {
                        path: "success",
                        component: BillingSuccessComponent,
                        data: {
                          breadcrumb: "BREADCRUMBS.BILLING.SUCCESS",
                        },
                      },
                      {
                        path: "cancel",
                        component: BillingCancelComponent,
                        data: {
                          breadcrumb: "BREADCRUMBS.BILLING.ERROR",
                        },
                      },
                    ],
                  },*/
      {
        path: "**",
        component: PageNotFoundComponent,
      },
    ],
  },
];

export const appRoutingModule = RouterModule.forRoot(routes);
