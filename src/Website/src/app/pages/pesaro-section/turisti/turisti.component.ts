import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { FaqListComponent } from "../../../components/faq-list/faq-list.component";
import { BtnFaqComponent } from "../../../components/btn-faq/btn-faq.component";

@Component({
  selector: "app-turisti",
  templateUrl: "./turisti.component.html",
  styleUrls: ["./turisti.component.css"],
  imports: [
    CommonModule,
    TranslateModule,
    StoreLogosComponent,
    FaqListComponent,
    BtnFaqComponent,
  ],
  standalone: true,
})
export class TuristiComponent implements OnInit {
  faqs = [];
  translatedTitle = this.translate.instant("PESARO.TOURISTS.TITLE");

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {
    translate.instant(translate.getBrowserLang() || "it");
    translate
      .get([
        "PESARO.TOURISTS.SECTION_FAQ_1_D",
        "PESARO.TOURISTS.SECTION_FAQ_1_R",
        "PESARO.TOURISTS.SECTION_FAQ_2_D",
        "PESARO.TOURISTS.SECTION_FAQ_2_R",
        "PESARO.TOURISTS.SECTION_FAQ_3_D",
        "PESARO.TOURISTS.SECTION_FAQ_3_R",
        "PESARO.TOURISTS.SECTION_FAQ_4_D",
        "PESARO.TOURISTS.SECTION_FAQ_4_R",
        "PESARO.TOURISTS.SECTION_FAQ_5_D",
        "PESARO.TOURISTS.SECTION_FAQ_5_R",
      ])
      .subscribe((translations) => {
        this.faqs = [
          {
            isOpen: false,
            header: translations["PESARO.TOURISTS.SECTION_FAQ_1_D"],
            content: [translations["PESARO.TOURISTS.SECTION_FAQ_1_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO.TOURISTS.SECTION_FAQ_2_D"],
            content: [translations["PESARO.TOURISTS.SECTION_FAQ_2_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO.TOURISTS.SECTION_FAQ_3_D"],
            content: [translations["PESARO.TOURISTS.SECTION_FAQ_3_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO.TOURISTS.SECTION_FAQ_4_D"],
            content: [translations["PESARO.TOURISTS.SECTION_FAQ_4_R"]],
          },
          {
            isOpen: false,
            header: translations["PESARO.TOURISTS.SECTION_FAQ_5_D"],
            content: [translations["PESARO.TOURISTS.SECTION_FAQ_5_R"]],
          },
        ];
      });
  }

  ngOnInit() {
    this.translate.get("PESARO.TOURISTS.TITLE").subscribe((title: string) => {
      this.translatedTitle = title;
    });

    // Fetch other translations and set this.faqs accordingly
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
