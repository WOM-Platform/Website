import { Routes } from "@angular/router";
import { WomFitComponent } from "./wom-fit/wom-fit.component";
import { WomPosComponent } from "./wom-pos/wom-pos.component";
import { WomPocketComponent } from "./wom-pocket/wom-pocket.component";

const DEFAULT_SEO = {
  image: "https://wom.social/assets/images/logo-og.png",
  type: "website",
};

export const appRoutes: Routes = [
  {
    path: "wom-pocket",
    component: WomPocketComponent,
    data: {
      breadcrumb: "BREADCRUMBS.APP.WOM_POCKET",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "wom-pos",
    component: WomPosComponent,
    data: {
      breadcrumb: "BREADCRUMBS.APP.WOM_POS",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "wom-fit",
    component: WomFitComponent,
    data: {
      breadcrumb: "BREADCRUMBS.APP.WOM_FIT",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
];
