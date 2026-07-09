import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";
import { Meta, Title } from "@angular/platform-browser";
import { SeoService } from "./_services/seo.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  isOnline: boolean = false;

  private seoService = inject(SeoService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private networkService: NetworkService,
    private translate: TranslateService
  ) {
    this.initializeTranslations();

    this.initializeNetworkStatus();

    this.initializeSeo();

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

  private initializeTranslations() {
    this.translate.addLangs(["en", "it"]);

    this.translate.setDefaultLang("it");

    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      this.translate.use(browserLang);
    }
  }

  private initializeNetworkStatus() {
    this.networkService.isOnline.subscribe((online) => {
      this.isOnline = online;
    });
  }

  private initializeSeo() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.getDeepestChild(this.activatedRoute);

        const seo = route.snapshot.data["seo"];

        if (seo) {
          this.seoService.updateSeo(seo);
        }
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }
}
