import { HomeComponent } from "./pages/home";
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
import { Routes } from "@angular/router";
import { SignInComponent } from "./authentication/signin/signin.component";
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
import { UsersComponent } from "./pages/users/users.component";

const DEFAULT_SEO = {
  image: "https://wom.social/assets/images/logo-og.png",
  type: "website",
};

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },

  {
    path: "platform",
    loadChildren: () =>
      import("./pages/platform/platform.routes").then((m) => m.platformRoutes),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./pages/users/users.routes").then((m) => m.usersRoutes),
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/app/app.routes").then((m) => m.appRoutes),
  },
  {
    path: "",
    loadChildren: () => import("./user/auth.routes").then((m) => m.routes),
  },
  {
    path: "faq",
    component: FaqComponent,
    data: {
      breadcrumb: "BREADCRUMBS.FAQ",
      seo: {
        title: "FAQ | WOM Social Frequently Asked Questions",
        description:
          "Trova risposte alle domande più frequenti su WOM Social, la piattaforma che connette cittadini, turisti ed esercenti.",
        canonical: "https://wom.social/faq",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "pesaro",

    children: [
      {
        path: "",
        pathMatch: "full",
        component: PesaroComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.PESARO",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "albergatori",
        component: AlbergatoriComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.HOTELIERS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "albergatori",
        component: AlbergatoriComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.HOTELIERS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "esercenti",
        component: EsercentiComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.MERCHANTS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "turisti",
        component: TuristiComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.TOURISTS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "cittadini",
        component: CittadiniComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PESARO.CITIZENS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
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
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
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
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
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
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "users",
    component: UsersComponent,
    data: {
      breadcrumb: "BREADCRUMBS.USERS",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
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
    path: "privacy",
    component: PrivacyComponent,
    data: {
      breadcrumb: "BREADCRUMBS.PRIVACY.PRIVACY",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
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
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "website",
        component: PrivacyWebsiteComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.WEBSITE",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "pos",
        component: PrivacyPosComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.POS",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "pocket",
        component: PrivacyPocketComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.POCKET",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "instrument",
        component: PrivacyInstrumentComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.INSTRUMENT",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
      {
        path: "womfit",
        component: PrivacyWomFitComponent,
        data: {
          breadcrumb: "BREADCRUMBS.PRIVACY.WOMFIT",
          seo: {
            title: "",
            description: "",
            canonical: "",
            ...DEFAULT_SEO,
          },
        },
      },
    ],
  },
  // Begin legacy URLs
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "challenge",
    redirectTo: "platform/challenge",
    pathMatch: "full",
  },

  {
    path: "merchant",
    redirectTo: "users/merchant",
    pathMatch: "full",
  },

  {
    path: "instrument",
    redirectTo: "users/instrument",
    pathMatch: "full",
  },

  {
    path: "applications",
    children: [
      {
        path: "",
        redirectTo: "/platform/actions",
        pathMatch: "full",
      },
      {
        path: "overview",
        redirectTo: "/platform/actions",
        pathMatch: "full",
      },
      {
        path: "womfit",
        redirectTo: "/platform/actions",
        pathMatch: "full",
      },
      {
        path: "libraries",
        redirectTo: "/platform/actions",
        pathMatch: "full",
      },
      {
        path: "universities",
        redirectTo: "/platform/actions",

        pathMatch: "full",
      },
      {
        path: "aworld",
        redirectTo: "/platform/actions",

        pathMatch: "full",
      },
      {
        path: "codymaze",
        redirectTo: "/platform/actions",

        pathMatch: "full",
      },
      {
        path: "balance",
        redirectTo: "/platform/actions",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "about-section",
    children: [
      {
        path: "",
        redirectTo: "/platform/about",
        pathMatch: "full",
      },
      {
        path: "about",
        redirectTo: "/platform/about",
        pathMatch: "full",
      },
      {
        path: "urbino",
        redirectTo: "/platform/about",
        pathMatch: "full",
      },
      {
        path: "fano",
        redirectTo: "/platform/about",
        pathMatch: "full",
      },
    ],
  },
  // End legacy URLs

  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
