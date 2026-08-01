import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";

@Component({
  selector: "app-wom-pos",
  imports: [TranslateModule, StoreLogosComponent, ScrollAnimationDirective],
  templateUrl: "./wom-pos.component.html",
  styleUrl: "./wom-pos.component.css",
})
export class WomPosComponent {}
