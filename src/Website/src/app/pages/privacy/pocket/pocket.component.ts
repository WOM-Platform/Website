import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-pocket',
    templateUrl: './pocket.component.html',
    standalone: false
})
export class PrivacyPocketComponent {
    constructor(private translate: TranslateService) {
    }
}
