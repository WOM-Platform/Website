import {inject} from "@angular/core";
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivateFn,
} from "@angular/router";
import {UserService} from "../_services";
import {Observable} from "rxjs";
import {UserMe} from "../_models";
import {isTokenValid} from "./token.helper";


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean => {
    const router = inject(Router);
    const userService = inject(UserService);
    const currentUser = userService.currentUserValue
    const currentUserLogin: UserMe = userService.currentUserLoginValue;


    // User is logged
    if (currentUserLogin) {

        const token = currentUserLogin.token
        if (token && isTokenValid(token)) {
            // check if user has validated email
            const verified = currentUserLogin.verified;

            if (state.url.includes("not-verified")) {
                if (verified) {
                    router.navigate(["user/home"]).then(() => {
                    });
                }
            } else if (!verified) {
                router
                    .navigate(["/user/not-verified"], {
                        queryParams: {returnUrl: state.url},
                    })
                    .then(() => {
                    });
            }
            // Check for admin access
            const requiredRoles = route.data['roles'] as Array<string>;
            if (requiredRoles && !requiredRoles.includes(currentUser.role)) {
                // Role not authorised so redirect to home page
                router.navigate(["/user/home"]).then(() => {
                });
                return false;
            }
        }
        return true;
    }

    // User not logged - redirect to login
    if (state.url === "/merchant" || state.url === "/user/home") {
        router
            .navigate(["/authentication/signin"], {
                queryParams: {returnUrl: state.url},
            })
            .then(() => {
            });
        return false;
    }

    // not logged in so redirect to login page with the return url
    router
        .navigate(["/"], {queryParams: {returnUrl: state.url}})
        .then(() => {
        });
    return false;

}
