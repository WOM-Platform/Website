import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {countryList, Merchant, primaryActivityType} from '../../_models';

@Component({
    selector: 'app-forms-merchant',
    templateUrl: './forms-merchant.directive.html',
    styleUrls: ['./forms-merchant.directive.css', '../forms.directive.css']
})
export class MerchantFormComponent implements OnInit {
    countryList: string[] = countryList;
    businessList: string[] = primaryActivityType;

    @Input() form: FormGroup;
    @Input() merchant: Merchant;
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
            primaryActivity: ['', Validators.required],
            url: ['', !Validators.required],
            description: ['', !Validators.required],
        });

        this.form.get('name').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('fiscalCode').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('address').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('cap').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('city').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('country').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('primaryActivity').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('url').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('description').valueChanges.subscribe(value => this.formChange.emit(this.form));

        if (this.merchant !== null) {
            this.form.controls.name.setValue(this.merchant.name);
            this.form.controls.fiscalCode.setValue(this.merchant.fiscalCode);
            this.form.controls.address.setValue(this.merchant.address);
            this.form.controls.cap.setValue(this.merchant.zipCode);
            this.form.controls.city.setValue(this.merchant.city);
            this.form.controls.country.setValue(this.merchant.country);
            this.form.controls.primaryActivity.setValue(this.merchant.primaryActivity);
            this.form.controls.url.setValue(this.merchant.url);
            this.form.controls.description.setValue(this.merchant.description);
        }
    }
}
