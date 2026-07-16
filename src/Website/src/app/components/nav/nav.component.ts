import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

import { UserLogin, UserMe } from "../../_models";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { UserService } from "../../_services";

import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class NavComponent implements OnInit {
  currentUserLogin: UserLogin | null = null;
  selectLang = "";

  TransLang: string[] = [];
  openMenu = false;
  showSubmenu = false;

  isAboutOpen = false;
  isVolunteersOpen = false;

  @ViewChild("drawer") drawer!: MatSidenav;
  @ViewChild("sidenavContainer") sidenavContainer!: ElementRef;

  @HostListener("document:click", ["$event"])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.sidenavContainer?.nativeElement.contains(
      event.target
    );

    if (!clickedInside && this.drawer.opened) {
      this.drawer.close();
    }
  }
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
    this.selectLang = this.translate.getBrowserLang() ?? "it";
  }

  get isLogged(): boolean {
    return this.currentUserLogin != null;
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent);
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
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [TranslateModule, MatDialogModule, MatButtonModule],
})
export class LogoutDialogComponent {}
