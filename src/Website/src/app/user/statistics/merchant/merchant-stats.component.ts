import {Component, OnInit} from "@angular/core";
import {MerchantContainer} from "src/app/_models";
import {StatsService, UserService} from "../../../_services";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-merchant-stats',
    templateUrl: './merchant-stats.component.html',
    styleUrls: ['./merchant-stats.component.css'],
    standalone: false
})
export class MerchantStatsComponent implements OnInit {
    merchants: MerchantContainer[];
    posScore: number;
    selectedMerchant: MerchantContainer;
    offers: { 'amount': number, 'offerId': number, 'offerName': string }[]
    bestOffer: { 'amount': number, 'offerId': number, 'offerName': string };
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

        if (this.merchants && this.idMerchant) {
            this.selectedMerchant = this.merchants.find(merch => merch.id === this.idMerchant)

            for (const pos of this.selectedMerchant.pos) {
                // FAKE API: amount of WOM
                this.statsService.getPosTotalAmount("924ebd20590ef1br325a6ecd").subscribe(res => {
                    this.totalAmount += res
                })

                this.statsService.getPosOffers("924ebd20590ef1br325a6ecd").subscribe(res => {
                    this.offers = res
                })

                if (this.offers && this.offers.length > 1) {
                    this.statsService.getPosBestOffer("924ebd20590ef1br325a6ecd").subscribe(res => {
                        this.bestOffer = res
                    })
                }

                this.statsService.getScorePos("924ebd20590ef1br325a6ecd").subscribe(res => {
                    this.posScore = res
                })
            }

        }

    }


}
