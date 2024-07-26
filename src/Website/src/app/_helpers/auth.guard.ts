import {inject} from "@angular/core";
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivate, CanActivateFn,
} from "@angular/router";
import {UserService} from "../_services";
import {Observable} from "rxjs";


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean => {
    const router = inject(Router);
    const userService = inject(UserService);
    const currentUserLogin = userService.currentUserLoginValue;

    // User is logged
    if (currentUserLogin) {
        // check if user has validated email
        const verified = currentUserLogin.verified;

        if (state.url.includes("not-verified")) {
            if (verified) {
                router.navigate(["user/home"]).then((r) => {
                });
            }
        } else if (!verified) {
            router
                .navigate(["/user/not-verified"], {
                    queryParams: {returnUrl: state.url},
                })
                .then((r) => {
                });
        }
        // Check for admin access
        const requiredRoles = route.data['roles'] as Array<string>;
        if (requiredRoles && !requiredRoles.includes(currentUserLogin.role)) {
            // Role not authorised so redirect to home page
            router.navigate(["/user/home"]).then((r) => {
            });
            return false;
        }


        return true;
    }

    // User not logged - redirect to login
    if (state.url === "/merchant" || state.url === "/user/home") {
        router
            .navigate(["/authentication/signin"], {
                queryParams: {returnUrl: state.url},
            })
            .then((r) => {
            });
        return false;
    }

    // not logged in so redirect to login page with the return url
    router
        .navigate(["/"], {queryParams: {returnUrl: state.url}})
        .then((r) => {
        });
    return false;

}
