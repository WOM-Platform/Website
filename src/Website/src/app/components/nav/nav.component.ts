import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserLogin} from '../../_models';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../_services';
import {AddMerchantDialogComponent} from "../../user/add-merchant/add-merchant.component";
import {first} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import { menuItems } from './menu-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isExpanded = false;
  currentUserLogin: UserLogin;
  openMenu = false;
  isOver = false;
  selectLang = '';
  TransLang = [];
  menuItems = menuItems
  
  constructor(
    private router: Router,
    private translate: TranslateService,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.userService.currentUserLogin.subscribe(x => this.currentUserLogin = x);
  }

  setTransLanguage(): void {
    this.translate.use(this.selectLang);
  }
  getTransLanguage(): void {
    this.TransLang = [...this.translate.getLangs()];
  }
  ngOnInit(): void {
    this.getTransLanguage();
    this.selectLang = this.translate.getBrowserLang();
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

  logout(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, null);
    dialogRef.afterClosed().subscribe(async result => {
      if(result) {
        this.userService.logout();
        await this.router.navigate(['/home']);
      }
    });
  }
}

@Component({
  selector: 'app-nav-logout-dialog',
  templateUrl: 'nav-logout-dialog.component.html'
})
export class LogoutDialogComponent {

}
