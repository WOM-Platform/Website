import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { NgIf } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-date-time-picker",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./date-time-picker.component.html",
  styleUrl: "./date-time-picker.component.css",
})
export class DateTimePickerComponent implements OnChanges {
  @Input() inputDate: any = null;
  @Input() textContent: string | null = null;
  @Output() dateSelected = new EventEmitter<Date | null>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: [""],
      time: [""],
    });

    // Emit event whenever date or time changes
    this.form.valueChanges.subscribe(() => {
      this.emitDate();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const parsedDate =
      typeof this.inputDate === "string"
        ? new Date(this.inputDate)
        : this.inputDate;

    if (changes && this.inputDate) {
      const dateStr = parsedDate.toISOString().substring(0, 10);
      const timeStr = parsedDate.toTimeString().substring(0, 5);
      this.form.patchValue(
        {
          date: dateStr,
          time: timeStr,
        },
        { emitEvent: false }
      ); // avoid triggering valueChanges on patch
    }
  }

  get selectedDateTime(): string | null {
    const date = this.form.get("date")?.value;
    const time = this.form.get("time")?.value;
    if (date && time) {
      const localDate = this.toLocalDate(date, time);
      const utcTIme = localDate.toISOString();
      return utcTIme;
    }
    return null;
  }

  private toLocalDate(date: string, time: string): Date {
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }

  private emitDate() {
    const date = this.form.get("date")?.value;
    const time = this.form.get("time")?.value;
    if (date && time) {
      const combined = this.toLocalDate(date, time);
      this.dateSelected.emit(combined);
    } else {
      this.dateSelected.emit(null);
    }
  }
}
