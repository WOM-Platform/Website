import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ActionsComponent } from "./actions/actions.component";
import { ChallengeComponent } from "./challenge/challenge.component";

const DEFAULT_SEO = {
  image: "https://wom.social/assets/images/logo-og.png",
  type: "website",
};

export const platformRoutes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full",
  },
  {
    path: "about",
    component: AboutComponent,
    data: {
      breadcrumb: "BREADCRUMBS.PLATFORM.ABOUT",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "challenge",
    component: ChallengeComponent,
    data: {
      breadcrumb: "BREADCRUMBS.PLATFORM.CHALLENGE",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "actions",
    component: ActionsComponent,
    data: {
      breadcrumb: "BREADCRUMBS.PLATFORM.INTEGRATIONS",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
];
