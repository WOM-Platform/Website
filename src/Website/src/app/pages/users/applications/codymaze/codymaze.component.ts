import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";

@Component({
  selector: "app-applications-codymaze",
  templateUrl: "./codymaze.component.html",
  standalone: true,
  imports: [TranslateModule, StoreLogosComponent],
})
export class ApplicationsCodymazeComponent {
  constructor() {}
}
