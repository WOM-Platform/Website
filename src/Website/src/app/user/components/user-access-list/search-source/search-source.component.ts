import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {PaginatorModule} from "primeng/paginator";
import {Subscription} from "rxjs";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgIf} from "@angular/common";
import {MatError} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {UserFormComponent} from "../../user-form/user-form.component";
import {User} from "../../../../_models";

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
        TranslateModule,
        UserFormComponent
    ],
    templateUrl: './search-source.component.html',
    styleUrl: './search-source.component.css'
})
export class SearchSourceComponent implements OnInit, OnDestroy {
    @Input() isRoleAccessRequired: boolean = false
    @Output() searchSource = new EventEmitter<any>()
    @Output() clearFormEvent = new EventEmitter<void>();
    @Output() createSource = new EventEmitter<any>();

    searchForm: FormGroup;

    searchSubscription: Subscription

    createNewUser = false

    constructor(private fb: FormBuilder,) {
    }

    ngOnInit() {

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

    createdUser(userAdded: User) {
        this.createSource.emit(userAdded)

    }

    clearForm() {
        this.searchForm.reset();
    }
}
