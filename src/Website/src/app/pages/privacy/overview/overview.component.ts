import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-privacy-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css", "../privacy.component.css"],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class PrivacyOverviewComponent {}
