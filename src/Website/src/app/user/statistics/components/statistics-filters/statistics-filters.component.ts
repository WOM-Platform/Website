import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { DatepickerComponent } from "../../../../components/datepicker/datepicker.component";
import { UserService } from "../../../../_services";
import { UserMe } from "../../../../_models";
import { filter } from "rxjs";
import { CombinedFilters, DateFilter } from "src/app/_models/filter";

@Component({
  selector: "app-statistics-filters",
  imports: [DatepickerComponent, NgIf],
  standalone: true,
  templateUrl: "./statistics-filters.component.html",
  styleUrl: "./statistics-filters.component.css",
})
export class StatisticsFiltersComponent implements OnInit {
  @Output() onDateFilter = new EventEmitter();
  @Output() onDownload = new EventEmitter();

  @Input() dateFilters: DateFilter;

  currentUser: UserMe;
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
    this.dateFilters.startDate = undefined;
    this.dateFilters.endDate = undefined;
    this.isDateFiltering = !this.isDateFiltering;
    this.onDateFilter.emit(this.dateFilters);
  }
}
