import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, Subject, takeUntil} from 'rxjs';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [ReactiveFormsModule, MatIcon],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
    @Input() placeholder: string = 'Ricerca...';
    @Output() searchEmit = new EventEmitter<string>();
    searchControl = new FormControl('');
    private destroy$ = new Subject<void>();

    ngOnInit() {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
                takeUntil(this.destroy$)
            )
            .subscribe((searchValue) => {
                if (searchValue.length >= 3 || searchValue.length === 0) {
                    this.searchEmit.emit(searchValue);
                }
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
