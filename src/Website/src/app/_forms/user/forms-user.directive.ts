import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput, MatError } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { TranslateModule } from "@ngx-translate/core";

type MerchantType = {
  email: AbstractControl<any, any>;
  password: AbstractControl<any, any>;
  passwordRepeat: AbstractControl<any, any>;
  firstName: AbstractControl<any, any>;
  lastName: AbstractControl<any, any>;
};

@Component({
  selector: "app-forms-user",
  templateUrl: "./forms-user.directive.html",
  styleUrls: ["./forms-user.directive.css", "../forms.directive.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatInput,
    MatError,
    MatDivider,
    MatButton,
    MatStepperModule,
  ],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() form!: FormGroup;
  @Input() disabled: boolean = false;
  @Output() formChange = new EventEmitter<UntypedFormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): any {
    this.form = this.fb.group(
      {
        email: ["", [Validators.email]],
        password: ["", [Validators.required]],
        passwordRepeat: ["", [Validators.required]],
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
      },
      {
        validators: isPasswordMatch,
      }
    );

    this.form.valueChanges.subscribe(() => {
      this.formChange.emit(this.form as UntypedFormGroup);
    });
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

export const isPasswordMatch = (
  controlName: string,
  matchingControlName: string
) => {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName];
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
};
