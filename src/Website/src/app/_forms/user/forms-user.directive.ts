import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-forms-user',
    templateUrl: './forms-user.directive.html',
    styleUrls: ['./forms-user.directive.css', '../forms.directive.css']
})
export class UserFormComponent implements OnInit, OnChanges {

    @Input() form: UntypedFormGroup;
    @Input() disabled: boolean;
    @Output() formChange = new EventEmitter<UntypedFormGroup>();

    constructor(private fb: UntypedFormBuilder){}

    ngOnInit(): any {
 

        this.form = this.fb.group({
            email: [{ value: '', disabled: this.disabled }, Validators.email],
            password: [{ value: '', disabled: this.disabled }, Validators.required],
            passwordRepeat: [{ value: '', disabled: this.disabled }, Validators.required], 
            firstName: [{ value: '', disabled: this.disabled }, Validators.required],
            lastName: [{ value: '', disabled: this.disabled }, Validators.required]
          },       {
            validator: isPasswordMatch("password", "passwordRepeat")
          });

        this.form.get('email').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('password').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('passwordRepeat').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('firstName').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('lastName').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }

    ngOnChanges(changes: SimpleChanges): any {
        console.log('changed');
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
    return (formGroup: UntypedFormGroup) => {
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