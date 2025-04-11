import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserLogin, UserMe } from "../../_models";
import { TranslateService } from "@ngx-translate/core";
import { UserService } from "../../_services";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  standalone: false,
})
export class NavComponent implements OnInit {
  currentUserLogin: UserMe;
  selectLang = "";
  TransLang = [];
  openMenu = false;
  showSubmenu = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translate: TranslateService,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.currentUserLogin.subscribe(
      (x) => (this.currentUserLogin = x)
    );
  }

  setTransLanguage(): void {
    console.log("Lang ", this.selectLang);
    this.translate.use(this.selectLang);
  }

  getTransLanguage(): void {
    this.TransLang = [...this.translate.getLangs()];
  }

  async navigate(link: string): Promise<void> {
    this.openMenu = false;
    await this.router.navigate(["/" + link]);
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
    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        this.userService.logout();
        await this.router.navigate(["/home"]);
      }
    });
  }
}

@Component({
  selector: "app-nav-logout-dialog",
  templateUrl: "nav-logout-dialog.component.html",
  standalone: false,
})
export class LogoutDialogComponent {}
