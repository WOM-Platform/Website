import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-user-verify',
    templateUrl: './user-verify.component.html',
    styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent implements OnInit{
    workingText: string;
    userId: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private translate: TranslateService,
                private snackBar: MatSnackBar,) {
    }

    ngOnInit() {
        const user = this.userService.currentUserLoginValue;
        if(user && user.verified){
            this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
            return;
        }

        if(!user) {
            this.workingText = this.translate.instant('USER.VERIFY.VERIFYING');
            this.route.queryParams
                .subscribe(params => {
                    if(!params || !params.userId) {
                        this.router.navigate(['/home']).then();
                    } else {
                        this.userId = params.userId;
                        this.sendVerification(params.userId, params.token);
                    }
                },
                error => {
                    console.log(error);
                    this.router.navigate(['/home']).then();
                }
                );
            return;
        }
    }

    sendVerification(userId:string, token: string): void {
        this.userService.sendVerification(userId, token).subscribe(res => {
            console.log(res);
            this.workingText = this.translate.instant('USER.VERIFY.VERIFIED');
        }, error => {
            console.log(error);
            this.workingText = '';
        });
    }

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 5000
        });
    }
}
