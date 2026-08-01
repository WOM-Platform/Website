import { Directive, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appScrollAnimation]",
  standalone: true,
})
export class ScrollAnimationDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, "opacity-0");

    this.renderer.addClass(this.el.nativeElement, "translate-y-8");

    this.renderer.addClass(this.el.nativeElement, "transition-all");

    this.renderer.addClass(this.el.nativeElement, "duration-700");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, "opacity-0");

          this.renderer.removeClass(this.el.nativeElement, "translate-y-8");

          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
