import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { Stats } from "src/app/_models/stats";
import { StatsService } from "src/app/_services/stats.service";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";
import { BtnFindOutMoreComponent } from "src/app/components/btn-find-out-more/btn-find-out-more.component";
import { CarouselComponent } from "src/app/components/carousel/carousel.component";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { MobileLauncherComponent } from "src/app/components/mobile-launcher/mobile-launcher.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    AnimatedNumberComponent,
    BtnFindOutMoreComponent,
    CarouselComponent,
    TranslateModule,
    StoreLogosComponent,
    MobileLauncherComponent,
  ],
})
export class HomeComponent {
  slidesList = [
    {
      path: "/assets/images/home/bannerBike.webp",
      mobile: "/assets/images/home/mbBannerBike.webp",
      alt: "Bicicletta",
    },
    {
      path: "/assets/images/home/bannerRunning.webp",
      mobile: "/assets/images/home/mbBannerRunning.webp",
      alt: "Corsa",
    },
    {
      path: "/assets/images/home/bannerEntrance.webp",
      mobile: "/assets/images/home/mbBannerEntrance.webp",
      alt: "Ingresso",
    },
    {
      path: "/assets/images/home/bannerMuseum.webp",
      mobile: "/assets/images/home/mbBannerMuseum.webp",
      alt: "Museo",
    },
    {
      path: "/assets/images/home/bannerFriends.webp",
      mobile: "/assets/images/home/mbBannerFriends.webp",
      alt: "Amici",
    },
    {
      path: "/assets/images/home/bannerHandshake.webp",
      mobile: "/assets/images/home/mbBannerHandshake.webp",
      alt: "Incontro",
    },
  ];

  squareList = [
    { path: "/assets/images/home/bike.webp" },
    { path: "/assets/images/home/bus.webp" },
    { path: "/assets/images/home/cinema.webp" },
    { path: "/assets/images/home/concert.webp" },
    { path: "/assets/images/home/eco.webp" },
    { path: "/assets/images/home/events.webp" },
    { path: "/assets/images/home/monument.webp" },
    { path: "/assets/images/home/museum.webp" },
    { path: "/assets/images/home/study.webp" },
    { path: "/assets/images/home/visiting.webp" },
    { path: "/assets/images/home/walking.webp" },
    { path: "/assets/images/home/osservare.webp" },
  ];

  stats: Stats = new Stats();
  isLoading = true;

  constructor(
    private router: Router,
    private statsService: StatsService
  ) {}

  ngOnInit(): void {
    this.statsService.getStatsList().subscribe((res) => {
      this.stats = res;
      this.isLoading = false;
    });
  }

  async navigate(link: string): Promise<void> {
    await this.router.navigate(["/" + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, "_blank");
  }
}
