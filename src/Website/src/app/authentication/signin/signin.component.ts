import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../_services';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    standalone: false
})
export class SignInComponent implements OnInit {
    error: string;
    form: UntypedFormGroup;
    hide = true;
    public loginInvalid: boolean;
    private formSubmitAttempt: boolean;
    private returnUrl: string;

    constructor(
        private fb: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private translate: TranslateService
    ) {
    }

    async ngOnInit(): Promise<void> {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/user/home';

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
                const username = this.form.get('username').value.trim();
                const password = this.form.get('password').value.trim();
                this.userService.login(username, password)
                    .pipe(first())
                    .subscribe({
                            next: () => {
                                this.userService.me().pipe().subscribe({
                                    next: () => {
                                        this.router.navigate([this.returnUrl]);
                                    }, error: (error) => {
                                        console.error(error);
                                        this.error = error;
                                    }
                                });
                            }
                            ,
                            error: (error) => {
                                console.log(error);
                                this.translate.get(['SIGN_IN.ERR.LOGIN', 'SIGN_IN.ERR.LOGIN']).subscribe(res => {
                                    if (error.status === 403) {
                                        this.error = res['SIGN_IN.ERR.LOGIN'];
                                    } else {
                                        this.error = res['SIGN_IN.ERR.LOGIN'];
                                    }
                                    this.loginInvalid = true;
                                });
                            }
                        }
                    );
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
