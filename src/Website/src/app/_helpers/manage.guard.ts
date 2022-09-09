import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService, UserService } from '../_services';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {RolesService} from "../_services/roles.service";

@Injectable({ providedIn: 'root' })
export class ManageGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService,
        private userService: UserService,
        private location: Location,
        private rolesService: RolesService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const currentUserLogin = this.userService.currentUserLoginValue;

        // User is logged
        if (currentUserLogin && currentUserLogin.verified) {
            return await this.rolesService.getManagerStatus().toPromise();
        } else {
            // User is not logged and verified
            this.location.back();
            return false;
        }
    }
}
