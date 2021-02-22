import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
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
        console.log('request login...');
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        this.userService.login(username, password)
          .pipe(first())
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate([this.returnUrl]);
            },
            error => {
              /*
              this.translate.get(["LOGIN.ERROR_1", "LOGIN.ERROR_2"]).subscribe(res => {
                this.loading = false;

                if (error.status == 403) {
                  this.error = res["LOGIN.ERROR_1"];
                } else {
                  this.error = res["LOGIN.ERROR_2"];
                }
              });*/
            });
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
