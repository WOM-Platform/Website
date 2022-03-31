import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {countryList, Merchant, primaryActivityType} from '../../_models';
import {debounceTime, switchMap, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {StorageService} from "../../_services/storage.service";

@Component({
    selector: 'app-forms-merchant',
    templateUrl: './forms-merchant.directive.html',
    styleUrls: ['./forms-merchant.directive.css', '../forms.directive.css']
})
export class MerchantFormComponent implements OnInit, OnDestroy {
    countryList: string[] = countryList;
    businessList: string[] = primaryActivityType;
    private unsubscribe = new Subject<void>()

    @Input() form: FormGroup;
    @Input() merchant: Merchant;
    @Output() formChange = new EventEmitter<FormGroup>();
    constructor(private fb: FormBuilder,
                private storageService: StorageService){}

    ngOnInit(): any {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(8)]],
            fiscalCode: [
                {value: '', disabled: this.merchant !== null},
                [Validators.required, Validators.minLength(11), Validators.maxLength(16)]
            ],
            address: ['', Validators.required],
            cap: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            primaryActivity: ['', Validators.required],
            url: ['', !Validators.required],
            description: ['', !Validators.required]
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
        } else {
            // Load from local storage if available
            const localData = this.storageService.load(this.storageService.merchantFormKey);
            if(localData) {
                this.form.controls.name.setValue(localData.name ?? '');
                this.form.controls.fiscalCode.setValue(localData.fiscalCode ?? '');
                this.form.controls.address.setValue(localData.address ?? '');
                this.form.controls.cap.setValue(localData.cap ?? '');
                this.form.controls.city.setValue(localData.city ?? '');
                this.form.controls.country.setValue(localData.country ?? '');
                this.form.controls.primaryActivity.setValue(localData.primaryActivity ?? '');
                this.form.controls.url.setValue(localData.url ?? '');
                this.form.controls.description.setValue(localData.description ?? '');
            }
            this.form.valueChanges.pipe(
                debounceTime(500),
                switchMap(async (formValue) => this.storageService.save(formValue, this.storageService.merchantFormKey)),
                takeUntil(this.unsubscribe)
            ).subscribe(() => {})
        }

        this.form.controls.url.valueChanges.subscribe(text => {
            if (text){
                const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
                this.form.controls.url.setValidators([Validators.required, Validators.pattern(urlRegex)])
            } else {
                this.form.controls.url.setValidators(null);
            }
        })
    }

    ngOnDestroy() {
        this.unsubscribe.next();
    }
}
