import {Component, EventEmitter, Output} from '@angular/core';
import {DatePipe, NgFor, NgIf} from "@angular/common";

@Component({
    selector: 'app-datepicker',
    standalone: true,
    imports: [NgIf, NgFor, DatePipe],
    templateUrl: './datepicker.component.html',
    styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
    @Output() dates = new EventEmitter<{ startDate: Date | null, endDate: Date | null }>();
    calendarVisible = false;
    isSelectingStart = true;
    currentMonth = new Date();
    days: Date[] = [];
    startDate: Date | null = null;
    endDate: Date | null = null;

    ngOnInit() {
        this.updateDays();
    }

    toggleCalendar(type: 'start' | 'end') {
        this.isSelectingStart = type === 'start';
        this.calendarVisible = !this.calendarVisible;
    }

    updateDays() {
        const startOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
        const endOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);

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
        if (this.isSelectingStart) {
            this.startDate = day;
        } else {
            this.endDate = day;
        }
        this.calendarVisible = false;
        // if the data range is selected emit to parent component
        if (this.startDate && this.endDate)
            this.emitDates();
    }

    isSelected(day: Date): boolean {
        return this.isSelectingStart ? day.getTime() === this.startDate?.getTime() : day.getTime() === this.endDate?.getTime();
    }

    emitDates() {
        this.dates.emit({startDate: this.startDate, endDate: this.endDate});
    }
}
