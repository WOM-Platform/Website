import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";
import {MatIcon} from "@angular/material/icon";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SearchComponent} from "../search/search.component";

@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [
        MatIcon,
        PaginatorModule,
        ReactiveFormsModule,
        SearchComponent
    ],
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit, OnDestroy {
    @Input() itemsPage: string = '10';
    @Output() filterEmit = new EventEmitter<any>();
    searchValue = ""
    private destroy$ = new Subject<void>();

    filterForm: FormGroup;

    ngOnInit() {
        this.filterForm = new FormGroup({
            itemsPerPage: new FormControl(this.itemsPage),
        });

        this.filterForm.get('itemsPerPage').valueChanges.subscribe(() => {
            this.filterEmit.emit({search: this.searchValue, itemsPerPage: this.filterForm.get('itemsPerPage').value});
        });
    }

    onSearch(value: string) {
        this.searchValue = value
        
        if (this.searchValue.length >= 3 || this.searchValue.length === 0) {
            this.filterEmit.emit({search: this.searchValue, itemsPerPage: this.filterForm.get('itemsPerPage').value});
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
