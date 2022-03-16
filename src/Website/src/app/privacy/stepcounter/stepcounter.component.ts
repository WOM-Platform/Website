import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-stepcounter',
    templateUrl: './stepcounter.component.html'
})
export class PrivacyStepcounterComponent {
    constructor(private translate: TranslateService) {
    }
}
