import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: false
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
