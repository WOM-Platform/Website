import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
  imports: [ScrollAnimationDirective, TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class UsersComponent {
  constructor() {}
}
