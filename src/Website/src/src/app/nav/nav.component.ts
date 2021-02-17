import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../_services';
import {User} from '../_models';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isExpanded = false;
  currentUser: User;
  openMenu = false;
  isOver = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isLogged(): boolean {
    return this.currentUser != null;
  }

  clickMenu(): void {
    this.openMenu = !this.openMenu;
  }

  collapse(): void {
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  async navigate(link: string): Promise<void> {
    this.openMenu = false;
    await this.router.navigate(['/' + link]);
  }

  async logout(): Promise<void> {
    this.authenticationService.logout();
    await this.router.navigate(['/home']);

  }
}
