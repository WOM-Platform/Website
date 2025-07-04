import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DatePipe, NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-datepicker",
  imports: [NgIf, NgFor, DatePipe],
  standalone: true,
  providers: [DatePipe],
  templateUrl: "./datepicker.component.html",
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

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    if (this.startDate) this.startDate = new Date(this.startDate);
    if (this.endDate) this.endDate = new Date(this.endDate);

    this.updateDays();
  }

  toggleCalendar(type: "start" | "end") {
    this.isSelectingStart = type === "start";
    this.calendarVisible = !this.calendarVisible;
  }

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
    for (let d = startOfMonth; d <= endOfMonth; d.setDate(d.getDate() + 1)) {
      this.days.push(new Date(d));
    }
  }

  previousMonth() {
    const newMonth = new Date(this.currentMonth);
    newMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.currentMonth = newMonth;
    this.updateDays();
  }

  nextMonth() {
    const newMonth = new Date(this.currentMonth);
    newMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.currentMonth = newMonth;
    this.updateDays();
  }

  selectDate(day: Date) {
    if (day > this.today) return; // Prevent selection of future dates
    if (this.isSelectingStart) {
      this.startDate = day;
    } else {
      this.endDate = day;
    }
    this.calendarVisible = false;
    // if the data range is selected emit to parent component
    if (this.startDate && this.endDate) this.emitDates();
  }

  isSelected(day: Date): boolean {
    return this.isSelectingStart
      ? day.getTime() === this.startDate?.getTime()
      : day.getTime() === this.endDate?.getTime();
  }

  emitDates() {
    this.dates.emit({ startDate: this.startDate, endDate: this.endDate });
  }
}
