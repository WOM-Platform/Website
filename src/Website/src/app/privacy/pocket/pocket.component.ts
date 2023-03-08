import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-privacy-pocket',
    templateUrl: './pocket.component.html'
})
export class PrivacyPocketComponent {
  constructor(private translate: TranslateService) {
  }
}
