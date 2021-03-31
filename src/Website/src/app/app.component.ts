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
    translate.addLangs(['en', 'it']);

    translate.setDefaultLang('it');

    console.log('browser lang: ', translate.getBrowserLang());
    if (translate.getBrowserLang()) {
      translate.use(translate.getBrowserLang());
    }
  }
}
