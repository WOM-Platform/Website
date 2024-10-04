import {Component, EventEmitter, Output} from '@angular/core';
import {DashboardAdminFilter} from "../../../_models/filter";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {DatepickerComponent} from "../../../components/datepicker/datepicker.component";
import {CsvDownloadComponent} from "../csv-download/csv-download.component";

@Component({
    selector: 'app-statistics-filters',
    standalone: true,
    imports: [
        DatepickerComponent,
        NgIf,
        NgFor,
        CsvDownloadComponent
    ],
    templateUrl: './statistics-filters.component.html',
    styleUrl: './statistics-filters.component.css'
})
export class StatisticsFiltersComponent {
    @Output() onDateFilter = new EventEmitter();
    @Output() onDownload = new EventEmitter();

    filters: DashboardAdminFilter = {
        startDate: "",
        endDate: ""
    }

    isDateFiltering: boolean = false;

    onDatesSelected(dates: { startDate: Date | null, endDate: Date | null }) {
        if (dates.startDate) {
            this.filters.startDate = new DatePipe("it-IT").transform(dates.startDate, 'yyyy-MM-dd').toLocaleString();
        }
        if (dates.endDate) {
            this.filters.endDate = new DatePipe("it-IT").transform(dates.endDate, 'yyyy-MM-dd').toLocaleString();
        }
        this.onDateFilter.emit(this.filters)
    }

    cancelDataFilter() {
        this.filters.startDate = ""
        this.filters.endDate = ""
        this.isDateFiltering = !this.isDateFiltering
        this.onDateFilter.emit(this.filters)
    }

}
