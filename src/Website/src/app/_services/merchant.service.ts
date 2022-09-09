import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchant} from '../_models';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {StripePrice} from "../_models/billing";

@Injectable({providedIn: 'root'})
export class MerchantService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'merchant/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'merchant/';

    constructor(private http: HttpClient) {}

    /**
     * Get merchant data from specific merchant id
     * @param id merchant id
     */
    getMerchant(id: string): Observable<Merchant> {
        return this.http.get<Merchant>(this.localUrlV1 + id)
            .pipe(map (response => response));
    }

    /**
     * Get merchant list
     */
    getMerchants(): Observable<Merchant[]> {
        return this.http.get<Merchant[]>(this.localUrlV1 + 'all')
            .pipe(map(response => {
                const data: Merchant[] = [];
                response.forEach((val: Merchant) => {
                    const prod = Merchant.fromJson(val);
                    data.push(prod);
                });
                return data;
            }));
    }

    /**
     * Update all information of a merchant
     * @param merchant data to update
     */
    update(merchant: Merchant): Observable<Merchant> {
        return this.http.put<Merchant>(this.localUrlV1 + merchant.id,
            {
                name: merchant.name,
                fiscalCode: merchant.fiscalCode,
                primaryActivity: merchant.primaryActivity,
                address: merchant.address,
                zipCode: merchant.zipCode,
                city: merchant.city,
                country: merchant.country,
                description: merchant.description,
                url: merchant.url
            })
            .pipe(map (response => response));
    }

    /**
     * Create a new merchant
     * @param merchant data of merchant to create
     */
    register(merchant: Merchant): Observable<Merchant> {
        return this.http.post<Merchant>(this.localUrlV1,
            {
                name: merchant.name,
                fiscalCode: merchant.fiscalCode,
                primaryActivity: merchant.primaryActivity,
                address: merchant.address,
                zipCode: merchant.zipCode,
                city: merchant.city,
                country: merchant.country,
                description: merchant.description,
                url: merchant.url
            })
            .pipe(map (response => response));
    }
}
