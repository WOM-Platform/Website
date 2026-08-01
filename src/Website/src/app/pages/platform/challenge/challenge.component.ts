import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SmallImagesCarouselComponent } from "src/app/components/small-images-carousel/small-images-carousel.component";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { ScrollAnimationDirective } from "src/app/directives/scroll-animation.directive";

@Component({
  selector: "app-challenge",
  imports: [
    TranslateModule,
    SmallImagesCarouselComponent,
    StoreLogosComponent,
    ScrollAnimationDirective,
  ],
  templateUrl: "./challenge.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./challenge.component.css",
})
export class ChallengeComponent {
  squareList = [
    {
      path: "/assets/images/badges/unOraDiWom.png",
      title: "PLATFORM.CHALLENGES.BADGES.UN_ORA_DI_WOM",
    },
    {
      path: "/assets/images/badges/ventiquattroOreWom.png",
      title: "PLATFORM.CHALLENGES.BADGES.VENTIQUATTRO_ORE_WOM",
    },
    {
      path: "/assets/images/badges/10.080DiQuestiMinuti.png",
      title: "PLATFORM.CHALLENGES.BADGES.DIECI_MILA_OTTANTA_MINUTI",
    },
    {
      path: "/assets/images/badges/primiPassi.png",
      title: "PLATFORM.CHALLENGES.BADGES.PRIMI_PASSI",
    },
    {
      path: "/assets/images/badges/60MinutiDiAttivita.png",
      title: "PLATFORM.CHALLENGES.BADGES.SESSANTA_MINUTI_ATTIVITA",
    },
    {
      path: "/assets/images/badges/inMovimento.png",
      title: "PLATFORM.CHALLENGES.BADGES.IN_MOVIMENTO",
    },
    {
      path: "/assets/images/badges/aRuotaLibera.png",
      title: "PLATFORM.CHALLENGES.BADGES.A_RUOTA_LIBERA",
    },
    {
      path: "/assets/images/badges/eccoti.png",
      title: "PLATFORM.CHALLENGES.BADGES.ECCOTI",
    },
    {
      path: "/assets/images/badges/nelPubblico.png",
      title: "PLATFORM.CHALLENGES.BADGES.NEL_PUBBLICO",
    },
    {
      path: "/assets/images/badges/partecipante.png",
      title: "PLATFORM.CHALLENGES.BADGES.PARTECIPANTE",
    },
    {
      path: "/assets/images/badges/protagonista.png",
      title: "PLATFORM.CHALLENGES.BADGES.PROTAGONISTA",
    },
  ];
}
