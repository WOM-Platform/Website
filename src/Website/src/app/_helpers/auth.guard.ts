import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService, UserService } from "../_services";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUserLogin = this.userService.currentUserLoginValue;

    // User is logged
    if (currentUserLogin) {
      // check if user has validated email
      const verified = currentUserLogin.verified;

      if (state.url.includes("not-verified")) {
        if (verified) {
          this.router.navigate(["user/home"]).then((r) => {});
        }
      } else if (!verified) {
        this.router
          .navigate(["/user/not-verified"], {
            queryParams: { returnUrl: state.url },
          })
          .then((r) => {});
      }
      return true;
    }

    // User not logged - redirect to login
    if (state.url === "/merchant" || state.url === "/user/home") {
      this.router
        .navigate(["/authentication/signin"], {
          queryParams: { returnUrl: state.url },
        })
        .then((r) => {});
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router
      .navigate(["/"], { queryParams: { returnUrl: state.url } })
      .then((r) => {});
    return false;
  }
}
