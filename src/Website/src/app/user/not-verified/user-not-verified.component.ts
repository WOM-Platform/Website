import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models';

@Component({
    selector: 'app-user-not-verified',
    templateUrl: './user-not-verified.component.html',
    styleUrls: ['./user-not-verified.component.css']
})
export class UserNotVerifiedComponent  {
    user: User;

    constructor(private userService: UserService) {
        this.user = userService.currentUserValue;
    }

    sendValidationEmail(): any {
        // TODO
    }
}
