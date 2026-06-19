import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-privacy-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css', '../privacy.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PrivacyOverviewComponent {}
