import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";
import {MatIcon} from "@angular/material/icon";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [
        MatIcon,
        PaginatorModule,
        ReactiveFormsModule,
    ],
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit, OnDestroy {
    @Input() itemsPage: string = '10';
    @Output() filterEmit = new EventEmitter<any>();
    private destroy$ = new Subject<void>();

    filterForm

    ngOnInit() {
        this.filterForm = new FormGroup({
            search: new FormControl(''),
            itemsPerPage: new FormControl(this.itemsPage),
        });

        this.filterForm.get('itemsPerPage').valueChanges.pipe(
            debounceTime(300),
            takeUntil(this.destroy$)
        ).subscribe(newValue => {
            this.filterEmit.emit(this.filterForm);
        });

        this.filterForm.get('search').valueChanges.pipe(
            debounceTime(300),
            takeUntil(this.destroy$)
        ).subscribe(newValue => {
            const searchValue = this.filterForm.get('search').value;
            if (searchValue.length >= 3 || searchValue.length === 0) {
                this.filterEmit.emit(this.filterForm);
            }
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
