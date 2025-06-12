import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  isOnline: boolean;

  constructor(
    private networkService: NetworkService,
    translate: TranslateService,
    private meta: Meta,
    private title: Title
  ) {
    translate.addLangs(["en", "it"]);
    translate.setDefaultLang("it");

    networkService.isOnline.subscribe((online) => {
      this.isOnline = online;

      console.log(
        "Network status in component:",
        online ? "Online" : "Offline"
      );
    });

    if (translate.getBrowserLang()) {
      translate.use(translate.getBrowserLang());
    }
  }

  ngOnInit() {
    this.title.setTitle("WOM");

    this.meta.addTags([
      {
        name: "description",
        content:
          "Compiendo azioni socialmente valide, ogni utente guadagna WOM",
      },
      { property: "og:title", content: "WOM" },
      {
        property: "og:description",
        content:
          "Compiendo azioni socialmente valide, ogni utente guadagna WOM",
      },
      {
        property: "og:image",
        content: "https://wom.social/assets/images/logo.png",
      },
      { property: "og:url", content: "https://wom.social/home" },
      { property: "og:type", content: "website" },
    ]);
  }
}
