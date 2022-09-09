import {Component, OnInit} from "@angular/core";
import {BillingService} from "../../_services/billing.service";
import {StripeCheckoutRequest, StripePrice} from "../../_models/billing";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-billing-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class BillingCheckoutComponent implements OnInit{
    products: StripePrice[] = [];
    responsiveOptions;

    constructor(private billingService: BillingService,
                private translationService: TranslateService) {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit() {
        this.billingService.products('MERCHANT').subscribe(result => {
            this.products = result;
        });
    }

    checkout(id: string) {
        console.log(id);
        let price = this.products.find(p => p.id == id);
        let data = new StripeCheckoutRequest();
        data.productId = price.productId;
        data.priceId = price.id;
        data.paymentMode = 'subscription';
        data.quantity = 1;
        data.redirectUrlParameters = '';

        this.billingService.checkout(data).subscribe(result => {
            window.open(result.url, "_self");
        }, error => {
            console.log(error);
        });
    }

    getCurrencySymbol(currency: string) {
        switch (currency) {
            case 'eur':
                return '€';
            default:
                return '€';
        }
    }

    getCurrencyValue(amount: number) {
        return (amount / 100).toFixed(2);
    }

    getRecurringPeriod(interval: string, intervalCount: number) {
            switch (interval){
                case 'year':
                    if(intervalCount === 1)
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.YEAR');
                    else
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.YEARS');
                case 'month':
                    if(intervalCount === 1)
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.MONTH');
                    else
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.MONTHS');
                case 'day':
                    if(intervalCount === 1)
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.DAY');
                    else
                        return this.translationService.instant('BILLING.RECURRING.INTERVAL.DAYS');
                    default:
                    return 'N/A';
            }
    }
}
