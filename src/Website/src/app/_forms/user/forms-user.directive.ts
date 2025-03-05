import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';

type MerchantType = {
  email: AbstractControl<any, any>;
  password: AbstractControl<any, any>;
  passwordRepeat: AbstractControl<any, any>;
  firstName: AbstractControl<any, any>;
  lastName: AbstractControl<any, any>;
}

@Component({
    selector: 'app-forms-user',
    templateUrl: './forms-user.directive.html',
    styleUrls: ['./forms-user.directive.css', '../forms.directive.css'],
    standalone: false
})
export class UserFormComponent implements OnInit, OnChanges {

    @Input() form: FormGroup;
    @Input() disabled: boolean;
    @Output() formChange = new EventEmitter<UntypedFormGroup>();

    constructor(private fb: FormBuilder){}

    ngOnInit(): any {
      this.form = this.fb.group({
        email: ['', [Validators.email]],
        password: ['', [Validators.required]],
        passwordRepeat: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]]
      }, {
        validators: isPasswordMatch
      });

        this.form.get('email').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('password').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('passwordRepeat').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('firstName').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('lastName').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }

    ngOnChanges(changes: SimpleChanges): any {
        if (this.disabled) {
            this.form.controls.email.disable();
            this.form.controls.password.disable();
            this.form.controls.passwordRepeat.disable();
            this.form.controls.firstName.disable();
            this.form.controls.lastName.disable();
        }
    }
    
}



  export const isPasswordMatch = (controlName: string, matchingControlName: string) => {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName]
        if (
          matchingControl.errors &&
          !matchingControl.errors.confirmPasswordValidator
        ) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmPasswordValidator: true });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }