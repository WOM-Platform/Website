import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const pesaro2024RedirectGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // Get the first segment after "pesaro2024"
  const childPath = route.url[0]?.path;

  // List of paths that should be redirected to "pesaro"
  const pathsToRedirect = ["albergatori", "esercenti", "turisti", "cittadini"];

  if (childPath && pathsToRedirect.includes(childPath)) {
    console.log(`Redirecting to /pesaro/${childPath}`);
    return router.createUrlTree(["/pesaro", childPath]);
  }

  // Allow navigation if it's not a path that needs redirection
  return true;
};
