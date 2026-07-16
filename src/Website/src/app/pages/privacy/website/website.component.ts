import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { CookieBannerComponent } from "src/app/components/cookie-banner/cookie-banner.component";

@Component({
  selector: "app-privacy-website",
  templateUrl: "./website.component.html",
  imports: [TranslateModule, CookieBannerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class PrivacyWebsiteComponent {
  openBanner$ = new BehaviorSubject(false);

  openCookieBanner() {
    this.openBanner$.next(true);
  }
}
