import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { UserService } from "../_services";
import { MatSnackBar } from "@angular/material/snack-bar";

const noAuthStrings = [
  "/aims-tab",
  "/aim",
  "auth/key",
  "user/login",
  "user/verify",
  "user/register",
  "user/password-reset",
  "sendinblue",
];

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const snackBar = inject(MatSnackBar);

  if (noAuthStrings.some((str) => req.url.includes(str))) {
    return next(req);
  }

  const userLogin = localStorage.getItem("currentUserLogin");

  if (!userLogin) {
    return next(req);
  }

  const user = JSON.parse(userLogin);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        userService.logout();

        snackBar.open("Sessione scaduta. Effettua il login.", "Chiudi", {
          duration: 5000,
        });
      }

      if (error.status === 0) {
        snackBar.open("🛠️ Errore del server. Riprova.", "Chiudi", {
          duration: 5000,
        });
      }

      return throwError(() => error);
    })
  );
};
