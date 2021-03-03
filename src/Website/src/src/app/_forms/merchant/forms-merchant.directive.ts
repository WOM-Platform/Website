import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {countryList, primaryActivityType} from '../../_models';

@Component({
    selector: 'app-forms-merchant',
    templateUrl: './forms-merchant.directive.html',
    styleUrls: ['./forms-merchant.directive.css', '../forms.directive.css']
})
export class MerchantFormComponent implements OnInit {
    countryList: string[] = countryList;
    businessList: string[] = primaryActivityType;

    @Input() form: FormGroup;
    @Output() formChange = new EventEmitter<FormGroup>();
    constructor(private fb: FormBuilder){}

    ngOnInit(): any {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(8)]],
            fiscalCode: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
            address: ['', !Validators.required],
            cap: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            primaryActivityType: ['', Validators.required],
            url: ['', !Validators.required],
            description: ['', !Validators.required],
        });

        this.form.get('name').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('fiscalCode').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('address').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('cap').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('city').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('country').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('primaryActivityType').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('url').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('description').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }
}
