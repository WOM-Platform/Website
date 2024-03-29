import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-instrument',
  templateUrl: './user-instrument.component.html',
  styleUrls: ['./user-instrument.component.css']
})
export class UserInstrumentComponent {
  constructor(private router: Router) {
  }
  openStats() {
    this.router.navigateByUrl("user/stats/instrument")
  }
}
