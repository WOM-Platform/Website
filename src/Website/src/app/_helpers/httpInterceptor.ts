import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { UserLogin } from "../_models";
import { UserService } from "../_services";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {}

  noAuthStrings: string[] = [
    "/aims-tab",
    "/aim",
    "auth/key",
    "user/login",
    "user/verify",
    "user/register",
    "user/password-reset",
    "sendinblue",
  ];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If true do nothing - auth header not needed
    if (this.noAuthStrings.some((str) => req.url.includes(str))) {
      return next.handle(req);
    }

    const userLogin = localStorage.getItem("currentUserLogin");
    if (userLogin === null) {
      return next.handle(req);
    }

    // Add auth to requests
    const user: UserLogin = JSON.parse(userLogin);
    let duplicate = req.clone({
      setHeaders: {
        Authorization: "Bearer " + user.token,
      },
    });

    // TMP
    //if(req.url.includes('roles')) {
    //    return of(new HttpResponse({ status: 200, body: true }));
    //}

    return next.handle(duplicate).pipe(
      tap((ev: HttpEvent<any>) => {
        // if (ev instanceof HttpResponse) {}
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (userLogin && error.status == 401) {
            this.userService.logout();
            let ref = this.snackBar.open("Unauthorized.", "close", {
              duration: 5000,
            });
          } else if (error.status === 0) {
            let ref = this.snackBar.open("🛠️ Server error", "close", {
              duration: 5000,
            });
            ref.afterDismissed().subscribe((res) => {});
          }
        }
        return throwError(error);
      })
    );
  }
}
