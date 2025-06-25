import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  imports: [CommonModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent implements OnInit {
  @Input() images: { path: string; mobile: string; alt: string }[] = [];
  currentIndex = 0;
  isMobile = false;
  intervalId: any;

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
    });

    this.startAutoPlay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }
}
