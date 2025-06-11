import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-applications-womfit",
  templateUrl: "./womfit.component.html",
  styleUrls: ["womfit.component.css"],
  standalone: false,
})
export class ApplicationsWomFitComponent {
  constructor(translate: TranslateService) {}
}
