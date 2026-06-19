import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";

@Component({
  selector: "app-applications-codymaze",
  templateUrl: "./codymaze.component.html",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TranslateModule, StoreLogosComponent],
})
export class ApplicationsCodymazeComponent {
  constructor() {}
}
