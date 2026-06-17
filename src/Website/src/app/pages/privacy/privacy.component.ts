import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.component.html",
  styleUrls: ["./privacy.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PrivacyComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList = {} as MediaQueryList;
  snavOpened: boolean = false;
  _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener(
      "change",
      () => this._mobileQueryListener
    );
  }

  ngOnInit() {
    this.snavOpened = false; //!this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener(
      "change",
      () => this._mobileQueryListener
    );
  }
}
