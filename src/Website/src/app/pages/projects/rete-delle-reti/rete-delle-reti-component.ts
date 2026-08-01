import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "rete-delle-reti",
  templateUrl: "./rete-delle-reti.component.html",
  styleUrls: ["./rete-delle-reti.component.css"],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class ReteDelleRetiComponent {
  constructor() {}
}
