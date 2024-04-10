import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {PaginatorModule} from "primeng/paginator";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-search-source',
    standalone: true,
    imports: [
        FormsModule,
        PaginatorModule,
        ReactiveFormsModule
    ],
    templateUrl: './search-source.component.html',
    styleUrl: './search-source.component.css'
})
export class SearchSourceComponent implements OnInit, OnDestroy {
    @Output() searchSource = new EventEmitter<any>()
    @Output() clearFormEvent = new EventEmitter<void>();
    searchForm: FormGroup;
    searchResults: any[] = [];

    searchSubscription: Subscription

    constructor(private fb: FormBuilder,) {
    }

    ngOnInit() {
        console.log("On init")

        this.searchForm = this.fb.group({
            name: ['',],
            surname: ['',],
            email: ['',],
        })

        this.searchSubscription = this.searchForm.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(() => {
            console.log("SSubscription")
            this.search();
        });
    }

    ngOnDestroy() {
        this.searchSubscription.unsubscribe()
    }

    search() {
        const searchCriteria = {};

        // Extract values from form controls
        const name = this.searchForm.get('name').value;
        const surname = this.searchForm.get('surname').value;
        const email = this.searchForm.get('email').value;

        // Populate searchCriteria based on form values
        if (name) {
            searchCriteria['firstName'] = name;
        }
        if (surname) {
            searchCriteria['lastName'] = surname;
        }
        if (email) {
            searchCriteria['email'] = email;
        }

        console.log("Search Criteria: ", searchCriteria);
        this.searchSource.emit(searchCriteria);
    }

    clearForm() {
        this.searchForm.reset();
    }
}
