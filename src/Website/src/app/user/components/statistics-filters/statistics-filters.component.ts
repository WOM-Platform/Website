import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DashboardAdminFilter} from "../../../_models/filter";
import {DatePipe, NgFor, NgIf} from "@angular/common";
import {DatepickerComponent} from "../../../components/datepicker/datepicker.component";
import {CsvDownloadComponent} from "../csv-download/csv-download.component";
import {UserService} from "../../../_services";
import {UserMe} from "../../../_models";
import { filter } from 'rxjs';

@Component({
    selector: 'app-statistics-filters',
    imports: [
        DatepickerComponent,
        NgIf,
    ],
    templateUrl: './statistics-filters.component.html',
    styleUrl: './statistics-filters.component.css'
})
export class StatisticsFiltersComponent implements OnInit {
    @Output() onDateFilter = new EventEmitter();
    @Output() onDownload = new EventEmitter();

    @Input() filters: DashboardAdminFilter

    currentUser: UserMe
    isDateFiltering: boolean = true;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.currentUser = this.userService.currentUserValue
    }

    onDatesSelected(dates: { startDate: Date | null, endDate: Date | null }) {
        if (dates.startDate) {
            // this.filters.startDate = new DatePipe("it-IT").transform(dates.startDate, 'yyyy-MM-dd').toLocaleString();
            this.filters.startDate = dates.startDate
        }
        if (dates.endDate) {
            this.filters.endDate = dates.endDate
            // this.filters.endDate = new DatePipe("it-IT").transform(dates.endDate, 'yyyy-MM-dd').toLocaleString();
        }
        console.log("I filtri ", this.filters)
        this.onDateFilter.emit(this.filters)
    }

    cancelDataFilter() {
        this.filters.startDate = undefined
        this.filters.endDate = undefined
        this.isDateFiltering = !this.isDateFiltering
        console.log("Prima di emit")
        this.onDateFilter.emit(this.filters)
    }

}
