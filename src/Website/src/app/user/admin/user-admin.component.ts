import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent {
  constructor(private router: Router) {
  }
  openStats() {
    this.router.navigateByUrl("user/stats/admin")
  }
}
