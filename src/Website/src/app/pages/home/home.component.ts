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
    { path: "/assets/images/home/bannerBike.jpg" },
    { path: "/assets/images/home/bannerMus.jpg" },
    { path: "/assets/images/home/bannerMusei.jpg" },
    { path: "/assets/images/home/bannerPiazza.jpg" },
  ];

  squareList = [
    { path: "/assets/images/home/bike.jpg" },
    { path: "/assets/images/home/bus.jpg" },
    { path: "/assets/images/home/cinema.jpg" },
    { path: "/assets/images/home/concert.jpg" },
    { path: "/assets/images/home/eco.jpg" },
    { path: "/assets/images/home/events.jpg" },
    { path: "/assets/images/home/monument.jpg" },
    { path: "/assets/images/home/museum.jpg" },
    { path: "/assets/images/home/study.jpg" },
    { path: "/assets/images/home/visiting.jpg" },
    { path: "/assets/images/home/walking.jpg" },
    { path: "/assets/images/home/osservare.jpg" },
  ];

  constructor(private router: Router) {}

  async navigate(link: string): Promise<void> {
    await this.router.navigate(["/" + link]);
  }

  async navigateExternal(link: string): Promise<void> {
    window.open(link, "_blank");
  }
}
