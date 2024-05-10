import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {PaginatorModule} from "primeng/paginator";
import {Subject, Subscription} from "rxjs";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";
import {MatError} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-search-source',
    standalone: true,
    imports: [
        FormsModule,
        PaginatorModule,
        ReactiveFormsModule,
        MatIcon,
        NgIf,
        NgClass,
        MatError,
        TranslateModule
    ],
    templateUrl: './search-source.component.html',
    styleUrl: './search-source.component.css'
})
export class SearchSourceComponent implements OnInit, OnDestroy {
    @Output() searchSource = new EventEmitter<any>()
    @Output() clearFormEvent = new EventEmitter<void>();
    @Output() createSource = new EventEmitter<any>();

    searchForm: FormGroup;
    createForm: FormGroup;
    searchResults: any[] = [];

    searchSubscription: Subscription
    searchParameters: string = ""
    searchTerms = new Subject<string>();

    createNewUser = false

    constructor(private fb: FormBuilder,) {
    }

    ngOnInit() {
        this.createForm = this.fb.group({
            nameCreate: ['', Validators.required],
            surnameCreate: ['', Validators.required,],
            emailCreate: ['', [Validators.required, Validators.email]],
            passwordCreate: ['', [Validators.required, Validators.minLength(8)]],

        })
        this.searchForm = this.fb.group({
            nameSearch: ['',],
            emailSearch: ['',],
        })

        this.searchSubscription = this.searchForm.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(() => {
            this.search();
        });
    }


    ngOnDestroy() {
        this.searchSubscription.unsubscribe()
    }

    search() {
        const searchCriteria = {};
        // Extract values from form controls
        const name = this.searchForm.get('nameSearch').value;
        const email = this.searchForm.get('emailSearch').value;

        if ((name && name.length >= 3) || (email && email.length >= 3)) {
            if (name) {
                searchCriteria['name'] = name;
            }
            if (email) {
                searchCriteria['email'] = email;
            }
            this.searchSource.emit(searchCriteria);
        } else if ((name && name.length < 3) || (email && email.length < 3)) {
            this.clearFormEvent.emit()
        }
    }

    changeAccessAction() {
        this.createNewUser = !this.createNewUser
        this.clearForm()
        this.clearFormEvent.emit()
    }

    create() {
        const createCriteria = {};
        const name = this.createForm.get('nameCreate').value;
        const surname = this.createForm.get('surnameCreate').value;
        const email = this.createForm.get('emailCreate').value;
        const password = this.createForm.get('passwordCreate').value;

        createCriteria['name'] = name
        createCriteria['surname'] = surname
        createCriteria['email'] = email
        createCriteria['password'] = password

        this.createSource.emit(createCriteria)
        /*}*/
    }

    clearForm() {
        this.searchForm.reset();
    }
}
