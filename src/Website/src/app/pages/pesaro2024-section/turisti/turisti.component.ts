import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-turisti",
  templateUrl: "./turisti.component.html",
  styleUrls: ["./turisti.component.css"],
})
export class TuristiComponent {
  faqs = [];
  translatedTitle = this.translate.instant("PESARO2024.TOURISTS.TITLE");

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {
    translate.setDefaultLang("it");
    translate.use(translate.getBrowserLang() || "it");
    translate
      .get([
        "PESARO2024.TOURISTS.SECTION_FAQ_1_D",
        "PESARO2024.TOURISTS.SECTION_FAQ_1_R",
        "PESARO2024.TOURISTS.SECTION_FAQ_2_D",
        "PESARO2024.TOURISTS.SECTION_FAQ_2_R",
        "PESARO2024.TOURISTS.SECTION_FAQ_3_D",
        "PESARO2024.TOURISTS.SECTION_FAQ_3_R",
        "PESARO2024.TOURISTS.SECTION_FAQ_4_D",
        "PESARO2024.TOURISTS.SECTION_FAQ_4_R",
        "PESARO2024.TOURISTS.SECTION_FAQ_5_D",
        "PESARO2024.TOURISTS.SECTION_FAQ_5_R",
      ])
      .subscribe((translations) => {
        this.faqs = [
          {
            isOpen: false,
            header: translations["PESARO2024.TOURISTS.SECTION_FAQ_1_D"],
            content: [translations["PESARO2024.TOURISTS.SECTION_FAQ_1_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO2024.TOURISTS.SECTION_FAQ_2_D"],
            content: [translations["PESARO2024.TOURISTS.SECTION_FAQ_2_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO2024.TOURISTS.SECTION_FAQ_3_D"],
            content: [translations["PESARO2024.TOURISTS.SECTION_FAQ_3_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO2024.TOURISTS.SECTION_FAQ_4_D"],
            content: [translations["PESARO2024.TOURISTS.SECTION_FAQ_4_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO2024.TOURISTS.SECTION_FAQ_5_D"],
            content: [translations["PESARO2024.TOURISTS.SECTION_FAQ_5_R"]],
          },
        ];
      });
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
