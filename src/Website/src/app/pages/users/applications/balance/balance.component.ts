import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-applications-balance",
  templateUrl: "./balance.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TranslateModule],
})
export class ApplicationsBalanceComponent {
  constructor() {}
}
