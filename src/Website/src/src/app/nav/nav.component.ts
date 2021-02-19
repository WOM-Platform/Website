import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserLogin} from '../_models';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isExpanded = false;
  currentUserLogin: UserLogin;
  openMenu = false;
  isOver = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private userService: UserService
  ) {
    this.userService.currentUserLogin.subscribe(x => this.currentUserLogin = x);
  }

  get isLogged(): boolean {
    return this.currentUserLogin != null;
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
    this.userService.logout();
    await this.router.navigate(['/home']);

  }
}
