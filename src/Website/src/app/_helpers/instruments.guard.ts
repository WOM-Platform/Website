import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../_services";

export const instrumentsGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const userService = inject(UserService);
    let currentUser

    userService.currentUser.subscribe({
        next: (res) => {
            currentUser = res
            if (currentUser && currentUser.role === 'User') {
                const hasInstruments = currentUser.sources && currentUser.sources.length > 0
                if (!hasInstruments) {
                    // Redirect to home or another route if no instruments
                    router.navigate(['/user/home']).then((r) => {
                    });
                    return false;
                }
            }
            return true
        }
    })
    return true;
};
