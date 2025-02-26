import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-website',
    templateUrl: './website.component.html',
    standalone: false
})
export class PrivacyWebsiteComponent {
    constructor(private translate: TranslateService) {
    }
}
