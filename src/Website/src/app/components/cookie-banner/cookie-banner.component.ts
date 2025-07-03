import { CommonModule } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { CookieConsentService } from "src/app/_services/cookie-consent.service";

@Component({
  selector: "app-cookie-banner",
  imports: [CommonModule, FormsModule],
  templateUrl: "./cookie-banner.component.html",
  styleUrl: "./cookie-banner.component.css",
  standalone: true,
})
export class CookieBannerComponent implements OnInit, OnDestroy {
  @Input() openBanner = new BehaviorSubject<boolean>(false);

  showBanner = false;
  showModal = false;
  preferences = {
    marketing: false,
  };

  $destroy = new Subject<boolean>();

  constructor(private consentService: CookieConsentService) {}

  ngOnInit(): void {
    const savedConsent = localStorage.getItem("cookieConsent");

    if (!savedConsent) {
      this.openBanner.next(true);
    } else {
      this.preferences = JSON.parse(savedConsent);
    }
    this.consentService.applyConsent();

    this.openBanner.pipe(takeUntil(this.$destroy)).subscribe((openBanner) => {
      this.showBanner = openBanner;
    });
  }

  ngOnDestroy() {
    this.openBanner.next(false);
    this.$destroy.next(null);
    this.$destroy.complete();
  }

  acceptAllCookies(): void {
    this.preferences = { marketing: true };
    this.saveAndApplyPreferences();
  }

  rejectAllCookies(): void {
    this.preferences = { marketing: false };
    this.saveAndApplyPreferences();
  }

  savePreferences(): void {
    this.saveAndApplyPreferences();
  }

  saveAndApplyPreferences(): void {
    localStorage.setItem("cookieConsent", JSON.stringify(this.preferences));
    this.showBanner = false;
    this.showModal = false;
    this.openBanner.next(false);
    this.applyPreferences();
    window.location.reload();
  }

  applyPreferences(): void {
    const consent = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  }
}
