import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-privacy-website',
    templateUrl: './website.component.html',
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
