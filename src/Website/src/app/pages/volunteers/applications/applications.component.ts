import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

import {applicationsList} from "./applications-list"

@Component({
    selector: 'app-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.css'],
    standalone: false
})
export class ApplicationsComponent implements OnInit, OnDestroy{
  mobileQuery: MediaQueryList;
  snavOpened: boolean;
  _mobileQueryListener: () => void;

  applicationsList = applicationsList;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", () => this._mobileQueryListener);
  }

  ngOnInit() {
    this.snavOpened = !this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", () => this._mobileQueryListener);
  }
}
