import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');

    if (translate.getBrowserLang()) {
      translate.use(translate.getBrowserLang());
    }
  }
}
