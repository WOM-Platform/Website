import {Component, OnInit} from '@angular/core';
import {UserMe} from '../../_models';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {UserService} from '../../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    user: UserMe;
    userId: string;
    token: string;
    form: UntypedFormGroup;
    passwordNoMatch = false;
    expiredLink = false;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private fb: UntypedFormBuilder,
                private snackBar: MatSnackBar,
                private router: Router,
                private translate: TranslateService) {
        if (userService.currentUserValue !== null) {
            userService.logout();
        }
    }

    ngOnInit(): any {
        this.route.queryParams.subscribe(params => {
            this.userId = params.userId;
            this.token = params.token;
        });
        this.user = this.userService.currentUserValue;

        console.log(this.userId);
        this.form = this.fb.group({
            password: ['', [Validators.required, Validators.minLength(8)]],
            passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    resetPassword(): void {
        this.expiredLink = false;
        if (!this.form.valid || this.form.controls === null) {
            return;
        }
        if (!this.checkPasswords()) {
            this.passwordNoMatch = true;
            return;
        }
        const pswd = this.form.controls.password.value;
        this.userService.passwordReset(this.userId, this.token, pswd).pipe().subscribe({
            next: () => {
                const snackTitle = this.translate.instant('RESET_PASSWORD.SNACKBAR_SUCCESS');
                const snackAction = this.translate.instant('RESET_PASSWORD.SNACKBAR_HOME');

                const snackBarRef = this.snackBar.open(
                    snackTitle,
                    snackAction,
                    {
                        duration: 5000
                    });
                snackBarRef.onAction().subscribe(() => {
                    this.router.navigate(['/authentication/signin']).then(r => r);
                });
                snackBarRef.afterDismissed().subscribe(() => {
                    this.router.navigate(['/authentication/signin']).then(r => r);
                });
                console.log('password reset success');
            },
            error: error => {
                // link already used if 404
                this.expiredLink = true;
                console.log('error: ', error);
            }
        })
    }

    checkPasswords(): boolean {
        if (this.form.controls.password === null || this.form.controls.passwordRepeat === null) {
            return false;
        }
        return this.form.controls.password.value === this.form.controls.passwordRepeat.value;
    }
}
