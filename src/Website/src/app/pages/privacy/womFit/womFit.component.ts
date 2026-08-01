import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-privacy-womfit",
  templateUrl: "./womFit.component.html",
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class PrivacyWomFitComponent {
  constructor(private translate: TranslateService) {}
}
