import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-user-verify',
    templateUrl: './user-verify.component.html',
    styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent implements OnInit{
    workingText: string;
    userId: string;
    email = '';
    error = false;
    errorText = '';
    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private translate: TranslateService,
                private snackBar: MatSnackBar,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.errorText = '';
        this.error = false;
        const user = this.userService.currentUserLoginValue;
        if(user && user.verified){
            this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
            return;
        }

        this.workingText = this.translate.instant('USER.VERIFY.VERIFYING');
        this.route.queryParams
            .subscribe(params => {
                if(!params || !params.userId) {
                    this.error = true;
                    console.warn('params error: ', params);
                    this.workingText = this.translate.instant('USER.VERIFY.INVALID_PARAMS');
                } else {
                    this.userId = params.userId;
                    this.sendVerification(params.userId, params.token);
                }
            },
            error => {
                console.warn('route query error: ', error);
                this.error = true;
                this.workingText = this.translate.instant('USER.VERIFY.INVALID_PARAMS');
            }
        );
        return;
    }

    sendVerification(userId:string, token: string): void {
        this.userService.sendVerification(userId, token).subscribe(res => {
            console.log(res);
            this.userService.logout();
            this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
        }, error => {
            console.warn('verification error: ', error);
            this.error = true;
            this.workingText = '';
        });
    }

    sendValidationEmail(): any {
        this.errorText = '';
        this.userService.requestVerificationEmailByEmail(this.email).subscribe(result => {
                const message = this.translate.instant('USER.NOT_VERIFIED.EMAIL_SENT');
                this.openSnackBar(message, 'home');
                console.log(result);
            },
            error => {
                console.error(error);
                this.error = true;
                this.errorText = this.translate.instant('USER.VERIFY.EMAIL_REQUEST_ERROR');
            });
    }

    openSnackBar(message = 'null', route = null): any {
        this.snackBar.open(message, null, {
            duration: 5000
        }).afterDismissed().subscribe(result => {
            if(route !== null && route !== '')
            this.router.navigate(['/'+route]).then();
        });;
    }

    navigate(url: string): void {
        this.router.navigate([url]);
    }
}
