import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-small-images-carousel",
  imports: [CommonModule],
  templateUrl: "./small-images-carousel.component.html",
  styleUrl: "./small-images-carousel.component.css",
})
export class SmallImagesCarouselComponent implements OnInit {
  @Input() images: { path: string }[] = [];
  slideGroups: { path: string }[][] = [];
  currentSlideIndex = 0;
  intervalId: any;
  itemsPerSlide = 4;

  ngOnInit() {
    this.updateItemsPerSlide();
    this.groupSlides();
    this.startAutoPlay();
  }

  @HostListener("window:resize", [])
  onResize() {
    this.updateItemsPerSlide();
    this.groupSlides();
  }

  updateItemsPerSlide() {
    this.itemsPerSlide = window.innerWidth < 640 ? 2 : 4; // Tailwind sm: breakpoint
  }

  groupSlides() {
    const groups = [];
    for (let i = 0; i < this.images.length; i += this.itemsPerSlide) {
      groups.push(this.images.slice(i, i + this.itemsPerSlide));
    }
    this.slideGroups = groups;
    this.currentSlideIndex = 0; // Reset on resize
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slideGroups.length;
    }, 5000);
  }

  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.slideGroups.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slideGroups.length) %
      this.slideGroups.length;
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}
