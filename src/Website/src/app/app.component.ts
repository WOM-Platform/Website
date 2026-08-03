import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";

import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CookieBannerComponent } from "./components/cookie-banner/cookie-banner.component";
import { SeoService } from "./_services/seo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, CookieBannerComponent],
})
export class AppComponent {
  isOnline = false;

  private seoService = inject(SeoService);
  private router = inject(Router);

  constructor(
    private networkService: NetworkService,
    private translate: TranslateService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const path = event.urlAfterRedirects.split("?")[0];

        this.seoService.updateSeo(path);
      });

    this.translate.addLangs(["en", "it"]);

    this.translate.setDefaultLang("it");

    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      this.translate.use(browserLang);
    }

    this.networkService.isOnline.subscribe((online) => {
      this.isOnline = online;
    });
  }
}
