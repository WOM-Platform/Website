import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-volontarx',
    templateUrl: './volontarx.component.html',
    styleUrl: './volontarx.component.css'
})
export class VolontarxComponent {
    faqs = [];
    translatedTitle = this.translate.instant("PESARO2024.TOURISTS.TITLE");

    constructor(
        private translate: TranslateService,
        private sanitizer: DomSanitizer
    ) {
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
                console.log("la lingua è ", translate.getBrowserLang());
                console.log(translations["PESARO2024.TOURISTS.SECTION_FAQ_1_R"]);
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

    ngOnInit() {
        this.translate
            .get("PESARO2024.TOURISTS.TITLE")
            .subscribe((title: string) => {
                this.translatedTitle = title;
            });

        // Fetch other translations and set this.faqs accordingly
    }

    toggleFaq(index: number) {
        this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }


}
