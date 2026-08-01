import { Component, OnInit, OnDestroy } from "@angular/core";

import { RouterLink } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import {
  AccordionComponent,
  AccordionItem,
} from "src/app/components/accordion/accordion.component";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";
import { SmallImagesCarouselComponent } from "src/app/components/small-images-carousel/small-images-carousel.component";

const actionKeys = [
  {
    key: "WOM_FIT",
    paragraphs: 4,
    routerLink: "/app/wom-fit",
  },
  {
    key: "NETWORKING",
    paragraphs: 4,
    // href: "/assets/pdf/tutorial_merchant.pdf",
  },
  {
    key: "GRATITUDE",
    paragraphs: 5,
    // routerLink: "/app/wom-fit",
  },
  {
    key: "UNIURB",
    paragraphs: 3,
    href: "https://wom.uniurb.it/",
  },
  {
    key: "ADRIABUS",
    paragraphs: 4,
    href: "https://www.adriabus.eu/",
  },
  {
    key: "EVENTS",
    paragraphs: 4,
    routerLink: null,
  },
  {
    key: "CULTURAL_PLACES",
    paragraphs: 5,
    routerLink: null,
  },
  {
    key: "VOLUNTEERING",
    paragraphs: 5,
    routerLink: null,
  },
  // {
  //   key: "CODYMAZE",
  //   paragraphs: 4,
  //   routerLink: null,
  // },
  // {
  //   key: "AWORLD",
  //   paragraphs: 3,
  //   href: "??",
  // },
  // {
  //   key: "BALANCE",
  //   paragraphs: 4,
  //   href: "https://balancemobile.it/home/",
  // },
];

@Component({
  selector: "app-actions",
  imports: [
    AccordionComponent,
    TranslateModule,
    RouterLink,
    ScrollAnimationDirective,
    SmallImagesCarouselComponent,
  ],
  templateUrl: "./actions.component.html",
  styleUrl: "./actions.component.css",
})
export class ActionsComponent implements OnInit, OnDestroy {
  actions: AccordionItem[] = [];

  private langSubscription!: Subscription;

  squareList = [
    { path: "/assets/images/home/bike.webp", title: "andare in bici" },
    { path: "/assets/images/home/bus.webp", title: "prendere l'autobus" },
    {
      path: "/assets/images/home/concert.webp",
      title: "partecipare ad eventi",
    },
    { path: "/assets/images/home/museum.webp", title: "visitare un museo" },
    { path: "/assets/images/home/study.webp", title: "studiare" },
    { path: "/assets/images/home/walking.webp", title: "camminare" },
    {
      path: "/assets/images/home/osservare.webp",
      title: "visitare luoghi di cultura",
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.buildActions();

    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.buildActions();
    });
  }
  private buildActions() {
    this.actions = actionKeys.map((action) => {
      const base = `PLATFORM.ACTIONS.ACTION_TO_GENERATE.${action.key}`;

      return {
        titleKey: `${base}.TITLE`,

        paragraphsKeys: Array.from({ length: action.paragraphs }, (_, index) =>
          this.translate.instant(`${base}.DESC_${index + 1}`)
        ),

        linkLabelKey: `${base}.LINK`,

        routerLink: action.routerLink ?? undefined,

        href: action.href,

        isOpen: false,
      };
    });
  }
  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
  }
}
