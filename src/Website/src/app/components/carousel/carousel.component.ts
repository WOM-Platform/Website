import { BreakpointObserver } from "@angular/cdk/layout";
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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((result) => {
        this.isMobile = result.matches;
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
