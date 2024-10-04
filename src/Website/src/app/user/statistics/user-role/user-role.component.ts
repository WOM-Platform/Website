import {Component, OnInit} from '@angular/core';
import {Merchant} from "../../../_models";
import {StorageService} from "../../../_services/storage.service";
import {MerchantService, UserService} from "../../../_services";
import {NgFor, NgIf} from "@angular/common";
import {Instrument} from "../../../_models/instrument";

@Component({
    selector: 'app-user-role',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './user-role.component.html',
    styleUrl: './user-role.component.css'
})
export class UserRoleComponent implements OnInit {
    currentUser
    merchants: Merchant[]
    sources: Instrument[]

    constructor(private merchantService: MerchantService, private storageService: StorageService, private userService: UserService) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData(): any {
        this.currentUser = this.storageService.loadCurrentUser()

        this.userService.userOwnershipStatus.subscribe({
            next: (res) => {
                this.merchants = res["merchants"];
            },
        });
        this.merchants = this.currentUser.merchants.map((merchant: Merchant, idx: number) => ({
            ...merchant,
        }));
        this.sources = this.currentUser.sources.map((source: Instrument) =>
            ({
                ...source
            }));

        this.merchants.map((merchant, idx) => {
                console.log("merchant ", merchant)
            }
        );

        this.sources.map(source => {
            console.log("source", source);
        })
    }

}
