import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { MobileLauncherComponent } from "src/app/components/mobile-launcher/mobile-launcher.component";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";

@Component({
  selector: "app-about",
  imports: [
    TranslateModule,
    RouterLink,
    MobileLauncherComponent,
    ScrollAnimationDirective,
  ],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {}
