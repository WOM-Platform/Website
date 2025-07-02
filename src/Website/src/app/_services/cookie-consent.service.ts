import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CookieConsentService {
  private consentKey = "cookieConsent";

  getConsent(): { marketing: boolean } {
    const stored = localStorage.getItem(this.consentKey);
    if (!stored) return { marketing: false };
    try {
      return JSON.parse(stored);
    } catch {
      return { marketing: false };
    }
  }

  applyConsent() {
    const consent = this.getConsent();
    // Load Meta Pixel if marketing consent is true
    if (consent.marketing) {
      this.loadMetaPixel();
    }
  }

  private loadMetaPixel() {
    if ((window as any).fbq) return; // prevent multiple initializations

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    (window as any).fbq = function () {
      (window as any).fbq.callMethod
        ? (window as any).fbq.callMethod.apply((window as any).fbq, arguments)
        : (window as any).fbq.queue.push(arguments);
    };
    (window as any).fbq.queue = [];
    (window as any).fbq.loaded = true;
    (window as any).fbq.version = "2.0";
    (window as any).fbq("init", "1061315619308510");
    (window as any).fbq("track", "PageView");
  }
}
