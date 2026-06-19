import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
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
