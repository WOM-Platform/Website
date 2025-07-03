import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CookieConsentService } from "src/app/_services/cookie-consent.service";
import { BehaviorSubject, of, Subject } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { takeUntil } from "rxjs/operators";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-cookie-banner",
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: "./cookie-banner.component.html",
  styleUrl: "./cookie-banner.component.css",
})
export class CookieBannerComponent {
  showBanner = false;
  showModal = false;
  preferences = {
    marketing: false,
  };

  constructor(private consentService: CookieConsentService) {}
  ngOnInit(): void {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      this.showBanner = true;
    } else {
      this.preferences = JSON.parse(savedConsent);
    }
    this.consentService.applyConsent();
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
    this.applyPreferences();
    window.location.reload();
  }

  applyPreferences(): void {
    const consent = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
    // Puoi gestire qui l'inizializzazione di script esterni in base a consent.analytics / marketing
  }
}
