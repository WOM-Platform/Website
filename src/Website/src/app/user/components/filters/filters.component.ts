import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {debounceTime} from "rxjs/operators";
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
    @Output() filterEmit = new EventEmitter<any>()
    sub: Subscription


    filterForm = new FormGroup({
        search: new FormControl(''),
        itemsPerPage: new FormControl('10'),
    })

    ngOnInit() {
        this.sub = this.filterForm.get('itemsPerPage').valueChanges.pipe(debounceTime(300)).subscribe(newValue => {
            this.filterEmit.emit(this.filterForm)
        })
        this.sub = this.filterForm.get('search').valueChanges.pipe(debounceTime(300)).subscribe(newValue => {
            const searchValue = this.filterForm.get('search').value;
            /*        this.filterForm.get('search').setValue(searchValue.trim())*/

            if (
                searchValue.length >= 3 ||
                searchValue.length === 0
            ) {
                this.filterEmit.emit(this.filterForm)
            }
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
