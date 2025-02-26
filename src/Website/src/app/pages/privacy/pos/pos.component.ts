import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-pos',
    templateUrl: './pos.component.html',
    standalone: false
})
export class PrivacyPosComponent {
    constructor(private translate: TranslateService) {
	}
}
