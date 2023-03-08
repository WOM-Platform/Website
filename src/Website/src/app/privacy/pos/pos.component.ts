import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-pos',
    templateUrl: './pos.component.html',
})
export class PrivacyPosComponent {
    constructor(private translate: TranslateService) {
}
