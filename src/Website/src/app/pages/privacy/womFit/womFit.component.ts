import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-privacy-womfit",
  templateUrl: "./womFit.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PrivacyWomFitComponent {
  constructor(private translate: TranslateService) {}
}
