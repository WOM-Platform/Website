import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UserService } from "../../_services";
import { UserMe } from "../../_models";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "@sentry/angular";

@Component({
  selector: "app-user-not-verified",
  templateUrl: "./user-not-verified.component.html",
  styleUrls: ["./user-not-verified.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UserNotVerifiedComponent {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private router: Router
  ) {
    this.user = userService.currentUserValue;
  }

  sendValidationEmail(): any {
    this.userService.requestVerificationEmailById().subscribe(() => {
      const message = this.translate.instant("USER.NOT_VERIFIED.EMAIL_SENT");
      this.openSnackBar(message);
    });
  }

  openSnackBar(message = "null"): any {
    this.snackBar
      .open(message, undefined, {
        duration: 5000,
      })
      .afterDismissed()
      .subscribe(() => {
        this.userService.logout();
        this.router.navigate(["/home"]).then();
      });
  }
}
