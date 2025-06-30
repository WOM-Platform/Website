import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: false,
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

  constructor(private router: Router) {}

  async navigate(link: string): Promise<void> {
    await this.router.navigate(["/" + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, "_blank");
  }
}
