import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-datepicker",
  imports: [DatePipe, FormsModule],
  standalone: true,
  providers: [DatePipe],
  templateUrl: "./datepicker.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./datepicker.component.css",
})
export class DatepickerComponent {
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Output() dates = new EventEmitter<{
    startDate: Date | null;
    endDate: Date | null;
  }>();

  today = new Date();
  calendarVisible = false;
  isSelectingStart = true;
  currentMonth = new Date();
  days: Date[] = [];

  months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  years: number[] = [];

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    if (this.startDate) {
      this.startDate = new Date(this.startDate);
    }

    if (this.endDate) {
      this.endDate = new Date(this.endDate);
    }

    // Generate years
    const currentYear = new Date().getFullYear();
    const startYear = 2018;

    this.years = Array.from(
      { length: currentYear - startYear + 1 },
      (_, i) => startYear + i
    );

    this.updateDays();
  }

  // open/close calendar
  toggleCalendar(type: "start" | "end") {
    this.isSelectingStart = type === "start";

    // Open on selected date if available
    const referenceDate = type === "start" ? this.startDate : this.endDate;

    this.currentMonth = referenceDate
      ? new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1)
      : new Date(this.today.getFullYear(), this.today.getMonth(), 1);

    this.updateDays();

    this.calendarVisible = !this.calendarVisible;
  }

  // days in month
  updateDays() {
    const startOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    );

    const endOfMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      0
    );

    this.days = [];

    for (
      let d = new Date(startOfMonth);
      d <= endOfMonth;
      d.setDate(d.getDate() + 1)
    ) {
      this.days.push(new Date(d));
    }
  }

  // month navigation
  previousMonth() {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );

    this.updateDays();
  }

  nextMonth() {
    const nextMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );

    // prevent future months
    if (nextMonth > this.today) {
      return;
    }

    this.currentMonth = nextMonth;

    this.updateDays();
  }

  // select month from dropdown
  changeMonth(month: number) {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), month, 1);

    this.updateDays();
  }

  // select year from dropdown
  changeYear(year: number) {
    this.currentMonth = new Date(year, this.currentMonth.getMonth(), 1);

    this.updateDays();
  }

  selectDate(day: Date) {
    if (day > this.today) {
      return;
    }

    const selectedDate = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate()
    );

    if (this.isSelectingStart) {
      this.startDate = selectedDate;
    } else {
      this.endDate = selectedDate;
    }

    // Close only when both selected
    if (this.startDate && this.endDate) {
      this.calendarVisible = false;
      this.emitDates();
    }
  }

  // select day
  isSelected(day: Date): boolean {
    const dayTime = this.normalize(day);

    return this.isSelectingStart
      ? dayTime === this.normalize(this.startDate)
      : dayTime === this.normalize(this.endDate);
  }

  emitDates() {
    this.dates.emit({
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  private normalize(date: Date | null): number | null {
    if (!date) {
      return null;
    }

    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();
  }
}
