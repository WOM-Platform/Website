import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pos, PosRegistration} from '../_models';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {StripeCheckoutRequest, StripeCheckoutResponse, StripePrice} from "../_models/billing";

@Injectable({providedIn: 'root'})
export class BillingService {
    localBillingUrl = environment.baseBillingUrl;

    constructor(private http: HttpClient) {
    }
    
    checkout(data: StripeCheckoutRequest): Observable<StripeCheckoutResponse> {
        return this.http.post<StripeCheckoutResponse>(this.localBillingUrl + '/checkout/create-checkout-session', {
            PaymentMode: data.paymentMode,
            PriceId: data.priceId,
            ProductId: data.productId,
            RedirectUrlParameters: data.redirectUrlParameters,
            Quantity: data.quantity
        }).pipe(map(response => StripeCheckoutResponse.fromJson(response)));
    }

    products(type: string): Observable<StripePrice[]> {
        return this.http.post<StripePrice[]>(this.localBillingUrl + '/product/list', {
            project: 'WOM',
            type: type
        })
            .pipe(map(response => {
                console.log(response);
                const data: StripePrice[] = [];
                response.forEach((val: StripePrice) => {
                    const prod = StripePrice.fromJson(val);
                    data.push(prod);
                });
                return data;
            }));
    }
}
