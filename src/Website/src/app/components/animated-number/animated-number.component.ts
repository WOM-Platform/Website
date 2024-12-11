import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
import { interval, Subscription } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-animated-number",
  template: `<p class="mb-0">
    <strong>{{ formattedDisplayNumber }}</strong>
  </p>`,
})
export class AnimatedNumberComponent implements OnChanges, OnDestroy {
  @Input() finalNumber: number;
  @Input() duration: number = 1000;
  displayNumber: number = 0;

  get formattedDisplayNumber(): string {
    // Formatta il numero come stringa con il punto come separatore delle migliaia
    return this.displayNumber.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  private animationSubscription: Subscription;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["finalNumber"]) {
      if (this.animationSubscription) {
        this.animationSubscription.unsubscribe(); // Stop the current animation if it's running
      }
      this.displayNumber = 0; // Reset to 0 before starting a new animation
      this.animateNumber();
    }
  }

  ngOnDestroy() {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  private animateNumber() {
    const intervalTime = 50;
    const steps = this.duration / intervalTime;
    const increment = this.finalNumber / steps;

    this.animationSubscription = interval(intervalTime)
      .pipe(
        map((i) => Math.min((i + 1) * increment, this.finalNumber)),
        takeWhile((value) => value <= this.finalNumber, true)
      )
      .subscribe({
        next: (value) => (this.displayNumber = value),
        complete: () => (this.displayNumber = this.finalNumber),
      });
  }
}
