import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserLogin} from '../../_models';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../_services';
import {AddMerchantDialogComponent} from "../../user/add-merchant/add-merchant.component";
import {first} from "rxjs/operators";
import {MatLegacyDialog as MatDialog} from "@angular/material/legacy-dialog";
import { menuItems } from './menu-items';


import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUserLogin: UserLogin;
  selectLang = '';
  TransLang = [];
  openMenu = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private translate: TranslateService, private router: Router, public dialog: MatDialog, private userService: UserService) {
    this.userService.currentUserLogin.subscribe(x => this.currentUserLogin = x);
  }

  setTransLanguage(): void {
    this.translate.use(this.selectLang);
  }
  getTransLanguage(): void {
    this.TransLang = [...this.translate.getLangs()];
  }

  async navigate(link: string): Promise<void> {
    this.openMenu = false;
    await this.router.navigate(['/' + link]);
  }

  ngOnInit(): void {
    this.getTransLanguage();
    this.selectLang = this.translate.getBrowserLang();
  }

  get isLogged(): boolean {
    return this.currentUserLogin != null;
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
