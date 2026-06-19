import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AboutSectionComponent {
  constructor() {
  }
}
