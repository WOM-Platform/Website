import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../_services';
import {UserService} from '../_services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUserLogin = this.userService.currentUserLoginValue;
    if (currentUserLogin) {
      // authorised so return true
      return true;
    }

    if (state.url === '/merchant')
    {
      this.router.navigate(['/authentication/signin'], {queryParams: {returnUrl: state.url}}).then(r => {});
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url}}).then(r => {});
    return false;
  }
}
