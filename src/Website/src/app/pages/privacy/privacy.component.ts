import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
    standalone: false
})
export class PrivacyComponent implements OnInit, OnDestroy{
  mobileQuery: MediaQueryList;
  snavOpened: boolean;
  _mobileQueryListener: () => void;

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
