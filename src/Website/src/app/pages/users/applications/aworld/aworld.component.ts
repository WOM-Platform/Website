import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-applications-aworld",
  templateUrl: "./aworld.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TranslateModule],
})
export class ApplicationsAworldComponent {
  constructor() {}
}
