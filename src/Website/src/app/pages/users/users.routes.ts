import { Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { PeopleComponent } from "./people/people.component";
import { MerchantComponent } from "./merchant/merchant.component";
import { InstrumentComponent } from "./instrument/instrument.component";

const DEFAULT_SEO = {
  image: "https://wom.social/assets/images/logo-og.png",
  type: "website",
};

export const usersRoutes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
  {
    path: "people",
    component: PeopleComponent,
    data: {
      breadcrumb: "BREADCRUMBS.USERS.PEOPLE",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
  {
    path: "merchant",
    component: MerchantComponent,
    data: {
      breadcrumb: "BREADCRUMBS.USERS.MERCHANT",
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
    component: InstrumentComponent,
    data: {
      breadcrumb: "BREADCRUMBS.USERS.INSTRUMENT",
      seo: {
        title: "",
        description: "",
        canonical: "",
        ...DEFAULT_SEO,
      },
    },
  },
];
