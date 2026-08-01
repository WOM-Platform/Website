import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { User } from "../../_models";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-request-new-password",
  templateUrl: "./request-new-password.component.html",
  styleUrls: ["./request-new-password.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormFieldModule,
    MatInput,
    MatButton,
  ],
})
export class RequestNewPasswordComponent implements OnInit {
  requestSent: boolean = false;
  form!: UntypedFormGroup;

  constructor(
    private userService: UserService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", Validators.email],
    });
  }

  requestPassword(): void {
    if (!this.form.valid) {
      console.log("input not valid");
      return;
    }
    if (this.form.controls.email.value === null) {
      console.log("email not inserted");
      return;
    }

    this.userService
      .passwordResetRequest(this.form.controls.email.value)
      .pipe()
      .subscribe(
        (response) => {
          this.requestSent = true;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
