import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { first } from "rxjs/operators";
import { UserService } from "../../_services";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatError, MatFormField, MatInput } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatInput,
    MatError,
    MatIcon,
    MatButton,
  ],
})
export class SignInComponent implements OnInit {
  error: string = "";
  form!: UntypedFormGroup;
  hide = true;
  public loginInvalid: boolean = false;
  private formSubmitAttempt: boolean = false;
  private returnUrl: string = "/user/home";

  constructor(
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private translate: TranslateService
  ) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/user/home";

    this.form = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required],
    });

    if (await this.userService.checkAuthenticated()) {
      await this.router.navigate([this.returnUrl]);
    }
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        console.log("request login...");

        const username = this.form.controls["username"].value.trim();
        const password = this.form.controls["password"].value.trim();

        this.userService
          .login(username, password)
          .pipe(first())
          .subscribe({
            next: () => {
              this.userService
                .me()
                .pipe()
                .subscribe({
                  next: () => {
                    this.router.navigate([this.returnUrl]);
                  },
                  error: (error) => {
                    console.error(error);
                    this.error = error;
                  },
                });
            },
            error: (error) => {
              console.log(error);
              this.translate
                .get(["SIGN_IN.ERR.LOGIN", "SIGN_IN.ERR.LOGIN"])
                .subscribe((res) => {
                  if (error.status === 403) {
                    this.error = res["SIGN_IN.ERR.LOGIN"];
                  } else {
                    this.error = res["SIGN_IN.ERR.LOGIN"];
                  }
                  this.loginInvalid = true;
                });
            },
          });
      } catch (err) {
        console.log(err);
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  throwTestError(): void {
    throw new Error("Sentry Test Error");
  }
}
