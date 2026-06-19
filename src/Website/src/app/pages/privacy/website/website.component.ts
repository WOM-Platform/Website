import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-privacy-website',
    templateUrl: './website.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PrivacyWebsiteComponent {
    openBanner$ = new BehaviorSubject(false);
    constructor(private translate: TranslateService) {
    }

    openCookieBanner() {
        this.openBanner$.next(true);
    }
}
