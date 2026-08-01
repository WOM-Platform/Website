import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";
// import { SeoService } from "./_services/seo.service";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CookieBannerComponent } from "./components/cookie-banner/cookie-banner.component";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CookieBannerComponent],
})
export class AppComponent {
  isOnline: boolean = false;

  constructor(
    private networkService: NetworkService,
    translate: TranslateService,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle("WOM");
    this.meta.addTags([
      { property: "og:title", content: "WOM" },
      {
        property: "og:description",
        content:
          "Compiendo azioni socialmente valide, ogni utente guadagna WOM",
      },
      {
        property: "og:image",
        content: "https://wom.social/assets/images/logo-og.png",
      },
      { property: "og:url", content: "https://wom.social/home" },
      { property: "og:type", content: "website" },
    ]);

    translate.addLangs(["en", "it"]);
    translate.setDefaultLang("it");

    networkService.isOnline.subscribe((online) => {
      this.isOnline = online;
    });

    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      translate.use(browserLang);
    }
  }
}
