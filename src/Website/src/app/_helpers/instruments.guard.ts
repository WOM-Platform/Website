import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { UserService } from "../_services";
import { map } from "rxjs/operators";

export const instrumentsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  return userService.currentUser.pipe(
    map((currentUser) => {
      if (currentUser && currentUser.role === "User") {
        const userWithSources = currentUser as any;
        const hasInstruments =
          userWithSources.sources && userWithSources.sources.length > 0;

        if (!hasInstruments) {
          router.navigate(["/user/home"]);
          return false;
        }
      }
      return true;
    })
  );
};
