import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NetworkService } from "./_services/network.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  isOnline: boolean;

  constructor(
    private networkService: NetworkService,
    translate: TranslateService
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
}
