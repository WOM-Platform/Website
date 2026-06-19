import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

import { applicationsList } from "./applications-list";
import { TranslateModule } from "@ngx-translate/core";
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatListItem, MatNavList } from "@angular/material/list";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    TranslateModule,
    MatSidenav,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatSidenavContent,
    RouterOutlet,
    RouterModule,
  ],
})
export class ApplicationsComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList = {} as MediaQueryList;
  snavOpened: boolean = false;
  _mobileQueryListener: () => void;

  applicationsList = applicationsList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(
      "change",
      () => this._mobileQueryListener
    );
  }

  ngOnInit() {
    this.snavOpened = !this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(
      "change",
      () => this._mobileQueryListener
    );
  }
}
