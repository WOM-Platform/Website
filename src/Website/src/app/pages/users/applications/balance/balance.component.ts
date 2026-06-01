import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-applications-balance",
  templateUrl: "./balance.component.html",
  standalone: true,
  imports: [TranslateModule],
})
export class ApplicationsBalanceComponent {
  constructor() {}
}
