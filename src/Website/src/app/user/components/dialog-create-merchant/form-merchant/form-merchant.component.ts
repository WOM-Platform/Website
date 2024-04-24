import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {countryList, Merchant, primaryActivityType} from '../../../../_models';
import {debounceTime, switchMap, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {StorageService} from "../../../../_services/storage.service";

@Component({
    selector: 'app-form-merchant',
    templateUrl: './form-merchant.component.html',
    styleUrls: ['./form-merchant.component.css', '../../../../_forms/forms.directive.css']
})
export class FormMerchantComponent implements OnInit, OnDestroy {
    countryList: string[] = countryList;
    businessList: string[] = primaryActivityType;
    private unsubscribe = new Subject<void>()

    @Input() form: UntypedFormGroup;
    @Input() merchant: Merchant;
    @Output() formChange = new EventEmitter<UntypedFormGroup>();
    @Output() formValidity = new EventEmitter<boolean>()

    constructor(private fb: UntypedFormBuilder,
                private storageService: StorageService) {
    }

    ngOnInit(): any {
        this.initForm()
        this.setupSubscriptions()
        this.populateForm()
    }

    ngOnDestroy() {
        this.unsubscribe.next();
    }

    private initForm() {
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
    }

    private setupSubscriptions(): void {
        this.form.valueChanges.pipe(
            debounceTime(500),
            /*switchMap(async (formValue) => this.storageService.save(formValue, this.storageService.merchantFormKey)),*/
            takeUntil(this.unsubscribe)
        ).subscribe(() => {
            if (this.form.valid) {
                this.formChange.emit(this.form)
            }
        });

        this.form.get('url').valueChanges.pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(value => {
            const validators = value ? [Validators.required, Validators.pattern(this.getUrlPattern())] : [];
            this.form.controls.url.setValidators(validators);
            this.form.controls.url.updateValueAndValidity();
        });
    }

    private populateForm(): void {
        if (this.merchant) {
            this.form.patchValue(this.merchant);
        } else {
            const localData = this.storageService.load(this.storageService.merchantFormKey);
            if (localData) {
                this.form.patchValue(localData);
            }
        }
    }

    private getUrlPattern(): RegExp {
        return /^(https?:\/\/)?[\w.-]+(\.[\w\.-]+)*[\w\-\._~:/?#[\]@!\$&'()*+,;=]+$/;
    }

    isControlInvalidAndTouched(control: string): boolean {
        const controlToCheck = this.form.get(control);
        return controlToCheck.invalid && controlToCheck.touched;
    }
}
