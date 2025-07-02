import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CookieConsentService } from "src/app/_services/cookie-consent.service";

@Component({
  selector: "app-cookie-banner",
  imports: [CommonModule],
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
