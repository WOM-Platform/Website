import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-user-verify',
    templateUrl: './user-verify.component.html',
    styleUrls: ['./user-verify.component.css'],
    standalone: false
})
export class UserVerifyComponent implements OnInit {
    workingText: string;
    userId: string;
    email = '';
    error = false;
    errorText = '';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private translate: TranslateService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.errorText = '';
        this.error = false;


        this.workingText = this.translate.instant('USER.VERIFY.VERIFYING');
        this.route.queryParams.subscribe(
            {
                next: (params) => {
                    const user = this.userService.currentUserLoginValue;
                    if (!params || !params.userId || !params.token) {
                        if (user && user.verified) {
                            this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
                            return;
                        }
                        this.error = true;
                        console.warn('params error: ', params);
                        this.workingText = this.translate.instant('USER.VERIFY.INVALID_PARAMS');
                    } else {
                        if (user) {
                            if (user.id === params.userId && user.verified) {
                                this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
                                return;
                            }
                        }
                        this.userId = params.userId;
                        this.sendVerification(params.userId, params.token);
                    }

                },
                error: (error) => {
                    console.warn('route query error: ', error);
                    this.error = true;
                    this.workingText = this.translate.instant('USER.VERIFY.INVALID_PARAMS');
                }
            }
        );
        return;
    }

    sendVerification(userId: string, token: string): void {
        this.userService.sendVerification(userId, token).subscribe({
            next: () => {
                // console.log(res);
                this.userService.logout();
                this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
            }, error: error => {
                console.warn('verification error: ', error);
                this.error = true;
                this.workingText = '';
            }
        });
    }

    sendValidationEmail(): any {
        this.errorText = '';
        this.userService.requestVerificationEmailByEmail(this.email).subscribe(
            {
                next: () => {
                    const message = this.translate.instant('USER.NOT_VERIFIED.EMAIL_SENT');
                    this.openSnackBar(message, 'home');
                    // console.log(result);
                },
                error: error => {
                    console.error(error);
                    this.error = true;
                    this.errorText = this.translate.instant('USER.VERIFY.EMAIL_REQUEST_ERROR');
                }
            });
    }

    openSnackBar(message = 'null', route = null): any {
        this.snackBar.open(message, null, {
            duration: 5000
        }).afterDismissed().subscribe(() => {
            if (route !== null && route !== '')
                this.router.navigate(['/' + route]).then();
        });
    }

    navigate(url: string): void {
        this.router.navigate([url]);
    }
}
