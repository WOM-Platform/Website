import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-privacy-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TranslateModule],
})
export class ApplicationsOverviewComponent {}
