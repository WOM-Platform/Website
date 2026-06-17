import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ChangeDetectionStrategy,
  signal,
  computed,
} from "@angular/core";
import { interval, Subscription } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-animated-number",
  template: `<p class="mb-0">
    <strong>{{ formattedDisplayNumber() }}</strong>
  </p>`,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class AnimatedNumberComponent implements OnChanges, OnDestroy {
  @Input() finalNumber: number = 0;
  @Input() duration: number = 1000;

  displayNumber = signal<number>(0);

  formattedDisplayNumber = computed(() => {
    return this.displayNumber()
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  });

  private animationSubscription: Subscription | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["finalNumber"]) {
      this.animationSubscription?.unsubscribe();
      this.displayNumber.set(0);
      this.animateNumber();
    }
  }
  ngOnDestroy() {
    this.animationSubscription?.unsubscribe();
  }

  private animateNumber() {
    const intervalTime = 30;
    const steps = this.duration / intervalTime;
    const increment = this.finalNumber / steps;

    this.animationSubscription = interval(intervalTime)
      .pipe(
        map((i) => Math.min((i + 1) * increment, this.finalNumber)),
        takeWhile((value) => value <= this.finalNumber, true)
      )
      .subscribe({
        next: (value) => this.displayNumber.set(value),
        complete: () => this.displayNumber.set(this.finalNumber),
      });
  }
}
