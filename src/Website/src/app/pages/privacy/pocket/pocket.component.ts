import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-pocket',
    templateUrl: './pocket.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PrivacyPocketComponent {
    constructor(private translate: TranslateService) {
    }
}
