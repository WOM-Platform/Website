import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_services';
import {log} from 'util';
import {first} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {MockupUser} from '../../_helpers/mockupData';

@Component({
  selector: 'app-merchant-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class MerchantSignInComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private mockup: MockupUser
  ) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
    this.authService.publicKey().subscribe(data => console.log((data)));

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

    if (await this.authService.checkAuthenticated()) {
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
        this.authService.login(username, password)
          .pipe(first())
          .subscribe(
            data => {
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
