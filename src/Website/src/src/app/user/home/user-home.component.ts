import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {Merchants} from '../../_models';
import {MerchantService} from '../../_services/merchant.service';
import {AuthService} from '../../_services';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
    selector: 'app-user-home',
    templateUrl: './user-home.component.html',
    styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
    username: string;
    merchants: Merchants;

    constructor(private userService: UserService,
                private merchantService: MerchantService,
                private authService: AuthService) {
    }

    ngOnInit(): any {
        this.username = this.userService.currentUserValue.name + ' ' +   this.userService.currentUserValue.surname;

        this.authService.merchants().pipe().subscribe(
            response =>
            {
                this.merchants = response;
            }, error => {
                console.log(error);
            });
    }

    addMerchant() {
        // TODO
    }

    addPos() {
        // TODO
    }
}
