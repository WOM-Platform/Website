import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-privacy-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.css"],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class PrivacyInstrumentComponent {}
