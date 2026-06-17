import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { DatepickerComponent } from "../../../../components/datepicker/datepicker.component";
import { UserService } from "../../../../_services";
import { UserMe } from "../../../../_models";
import { filter } from "rxjs";
import { CombinedFilters, DateFilter } from "src/app/_models/filter";
import { User } from "@sentry/angular";

@Component({
  selector: "app-statistics-filters",
  imports: [DatepickerComponent],
  standalone: true,
  templateUrl: "./statistics-filters.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./statistics-filters.component.css",
})
export class StatisticsFiltersComponent implements OnInit {
  @Output() onDateFilter = new EventEmitter();
  @Output() onDownload = new EventEmitter();

  @Input() dateFilters: DateFilter = {
    startDate: null,
    endDate: null,
  };

  currentUser: User | null = null;
  isDateFiltering: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
  }

  onDatesSelected(dates: { startDate: Date | null; endDate: Date | null }) {
    if (dates.startDate) {
      // this.filters.startDate = new DatePipe("it-IT").transform(dates.startDate, 'yyyy-MM-dd').toLocaleString();
      this.dateFilters.startDate = dates.startDate;
    }
    if (dates.endDate) {
      this.dateFilters.endDate = dates.endDate;
      // this.filters.endDate = new DatePipe("it-IT").transform(dates.endDate, 'yyyy-MM-dd').toLocaleString();
    }
    this.onDateFilter.emit(this.dateFilters);
  }

  cancelDataFilter() {
    this.dateFilters.startDate = null;
    this.dateFilters.endDate = null;
    this.isDateFiltering = !this.isDateFiltering;
    this.onDateFilter.emit(this.dateFilters);
  }
}
