import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-challenge",
  imports: [TranslateModule],
  templateUrl: "./challenge.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./challenge.component.css",
})
export class ChallengeComponent {}
