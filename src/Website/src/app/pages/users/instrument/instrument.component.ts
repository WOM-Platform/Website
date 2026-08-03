import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { SmallImagesCarouselComponent } from "src/app/components/small-images-carousel/small-images-carousel.component";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.css"],
  imports: [
    TranslateModule,
    ScrollAnimationDirective,
    SmallImagesCarouselComponent,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class InstrumentComponent implements OnInit {
  currLanguage = "";
  constructor(private translate: TranslateService) {}

  instrumentImages = [
    {
      url: "https://www.adriabus.eu/",
      path: "assets/images/users/instrument/adriabus.png",
    },
    {
      path: "assets/images/users/instrument/aworld-logo.webp",
    },
    {
      url: `https://wom.social/app/wom-fit`,
      path: "assets/images/applications/WOMFitSenzaScritta.png",
    },
    {
      url: "https://digit.srl/",
      path: "assets/images/users/instrument/cropped-digit_logo_web-1024x478.png",
    },
    {
      url: "https://pesaro2024.it/it/volontarx",
      path: "assets/images/users/instrument/csm_PS24-Volontari-logo_page-0001_963678dba8.jpg",
    },
    {
      url: "https://www.uniurb.it/",
      path: "assets/images/users/instrument/logo-nh-uniurb.svg",
    },
    {
      url: "https://pesaromusei.it/",
      path: "assets/images/users/instrument/PS-musei-Logo-verde-RGB.png",
    },
    {
      url: "https://theopenstage.it/",
      path: "assets/images/users/instrument/startup-openstage.png",
    },
  ];
  ngOnInit(): void {
    this.currLanguage = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currLanguage = event.lang;
    });
  }
}
