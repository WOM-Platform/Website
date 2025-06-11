import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  HostListener,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-small-images-carousel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./small-images-carousel.component.html",
  styleUrl: "./small-images-carousel.component.css",
})
export class SmallImagesCarouselComponent implements OnInit, AfterViewInit {
  @Input() images: { path: string }[] = [];
  slideGroups: { path: string }[][] = [];
  currentSlideIndex = 0;
  intervalId: any;
  itemsPerSlide = 4;
  noTransition = false;

  private realSlideCount = 0;

  ngOnInit() {
    this.updateItemsPerSlide();
    this.groupSlides();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.currentSlideIndex = this.itemsPerSlide;

      this.startAutoPlay();
    }, 0);
  }

  @HostListener("window:resize", [])
  onResize() {
    this.updateItemsPerSlide();
    this.groupSlides();
  }

  updateItemsPerSlide() {
    this.itemsPerSlide = window.innerWidth < 640 ? 2 : 4;
  }

  groupSlides() {
    const groups = [];
    const originalGroups = [];

    for (let i = 0; i < this.images.length; i += this.itemsPerSlide) {
      originalGroups.push(this.images.slice(i, i + this.itemsPerSlide));
    }
    this.realSlideCount = originalGroups.length;

    if (this.realSlideCount === 0) {
      this.slideGroups = [];
      this.currentSlideIndex = 0;
      return;
    }

    for (let i = 0; i < this.itemsPerSlide; i++) {
      groups.push(
        originalGroups[
          originalGroups.length -
            ((this.itemsPerSlide - i) % originalGroups.length)
        ]
      );
    }
    groups.push(...originalGroups);
    for (let i = 0; i < this.itemsPerSlide; i++) {
      groups.push(originalGroups[i % originalGroups.length]);
    }

    this.slideGroups = groups;
    this.currentSlideIndex = this.itemsPerSlide;

    this.stopAutoPlay();
    if (this.slideGroups.length > 0) {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    if (this.slideGroups.length === 0) return;

    this.intervalId = setInterval(() => {
      this.nextSlide(true);
    }, 3000);
  }

  nextSlide(isAutoPlay = false) {
    if (this.noTransition) return;

    this.currentSlideIndex++;

    if (this.currentSlideIndex >= this.realSlideCount + this.itemsPerSlide) {
      setTimeout(() => {
        this.noTransition = true;
        this.currentSlideIndex = this.itemsPerSlide;
        setTimeout(() => {
          this.noTransition = false;
        }, 50);
      }, 500);
    }

    if (!isAutoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  prevSlide(isAutoPlay = false) {
    if (this.noTransition) return;

    this.currentSlideIndex--;
    if (this.currentSlideIndex < this.itemsPerSlide) {
      setTimeout(() => {
        this.noTransition = true;
        this.currentSlideIndex = this.realSlideCount + this.itemsPerSlide - 1;

        setTimeout(() => {
          this.noTransition = false;
        }, 50);
      }, 500);
    }

    if (!isAutoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}
