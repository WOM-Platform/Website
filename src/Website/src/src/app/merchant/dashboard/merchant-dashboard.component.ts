import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant-dashboard.component.html',
  styleUrls: ['./merchant-dashboard.component.css']
})
export class MerchantDashboardComponent {
  constructor(private userService: UserService) {
    userService.getLoggedUser().pipe(first()).subscribe(user => {
      console.log(user);
    });
  }
}
