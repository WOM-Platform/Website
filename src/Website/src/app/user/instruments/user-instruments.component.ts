import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../_services";
import {StorageService} from "../../_services/storage.service";
import { Instrument } from 'src/app/_models/instrument';

@Component({
    selector: 'app-user-instrument',
    templateUrl: './user-instruments.component.html',
    styleUrls: ['./user-instruments.component.css']
})
export class UserInstrumentsComponent implements OnInit {
    username: string;
    instruments: Instrument;
    currentUser: any;

    constructor(private router: Router, private userService: UserService, private storageService: StorageService) {
    }


    ngOnInit(): any {
        this.username =
            this.userService.currentUserValue.name +
            " " +
            this.userService.currentUserValue.surname;
        this.loadData();
    }

    ngOnDestroy(): any {
    }

    loadData(): any {
        this.instruments = this.storageService.load("instrumentData")
        this.currentUser = this.storageService.load("currentUser")
    }

    openStats() {
        this.router.navigateByUrl("user/stats/instrument")
    }
}
