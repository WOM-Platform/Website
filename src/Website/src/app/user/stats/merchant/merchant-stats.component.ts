import {Component, OnInit} from "@angular/core";
import {MerchantContainer} from "src/app/_models";
import {StatsService, UserService} from "../../../_services";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-merchant-stats',
    templateUrl: './merchant-stats.component.html',
    styleUrls: ['./merchant-stats.component.css']
})
export class MerchantStatsComponent implements OnInit {
    merchants: MerchantContainer[];
    totalAmount: number = 0;
    idMerchant: string;

    constructor(private statsService: StatsService, private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idMerchant = params['id']
        })
        this.loadData();
    }

    loadData() {
        this.merchants = JSON.parse(localStorage.getItem('merchantData'))
        console.log(this.merchants)

        if (this.merchants && this.idMerchant) {
            const selectedMerchant = this.merchants.find(merch => merch.id === this.idMerchant)
            console.log("selectedMerchant")
            console.log(selectedMerchant)
        }
        /* this.statsService.getMerchTotalAmount().subscribe(data => {
             console.log("Console log ", data);
             this.totalAmount = data;
         }); */
    }
}
