import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }

    if (state.url === '/merchant')
    {
      this.router.navigate(['/user/signin'], {queryParams: {returnUrl: state.url}}).then(r => {});
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], {queryParams: {returnUrl: state.url}}).then(r => {});
    return false;
  }
}
