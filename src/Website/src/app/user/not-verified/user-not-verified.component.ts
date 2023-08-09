import {Component} from '@angular/core';
import {UserService} from '../../_services';
import {User} from '../../_models';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-not-verified',
    templateUrl: './user-not-verified.component.html',
    styleUrls: ['./user-not-verified.component.css']
})
export class UserNotVerifiedComponent  {
    user: User;

    constructor(private userService: UserService,
                private snackBar: MatSnackBar,
                private translate: TranslateService,
                private router: Router) {
        this.user = userService.currentUserValue;
    }

    sendValidationEmail(): any {
        this.userService.requestVerificationEmailById().subscribe(result => {
            const message = this.translate.instant('USER.NOT_VERIFIED.EMAIL_SENT');
            this.openSnackBar(message);
        });
    }

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 5000
        }).afterDismissed().subscribe(result => {
            this.userService.logout();
            this.router.navigate(['/home']).then();
        });
    }
}
