import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchant} from '../_models';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({providedIn: 'root'})
export class MerchantService {
    headers: HttpHeaders;
    constructor(private http: HttpClient,
                private userService: UserService) {
        this.headers = new HttpHeaders({
            Authorization: `Bearer ${userService.currentUserLoginValue.token}`
        });
    }

    /**
     * Get merchant data from specific merchant id
     * @param id merchant id
     */
    getMerchant(id: string): Observable<Merchant> {
        return this.http.get<Merchant>(environment.baseUrl + environment.v1 + 'merchant/' + id)
            .pipe(map (response => response));
    }

    /**
     * Update all information of a merchant
     * @param merchant data to update
     */
    update(merchant: Merchant): Observable<Merchant> {
        return this.http.patch<Merchant>(environment.baseUrl + environment.v1 + 'merchant/' + merchant.id,
            {
                name: merchant.name,
                primaryActivity: merchant.primaryActivity,
                address: merchant.address,
                zipCode: merchant.zipCode,
                city: merchant.city,
                country: merchant.country,
                description: merchant.description,
                websiteUrl: merchant.websiteUrl
            },
            {headers: this.headers})
            .pipe(map (response => response));
    }

    /**
     * Create a new merchant
     * @param merchant data of merchant to create
     */
    register(merchant: Merchant): Observable<Merchant> {
        return this.http.post<Merchant>(environment.baseUrl + environment.v1 + 'merchant/register',
            {
                name: merchant.name,
                primaryActivity: merchant.primaryActivity,
                address: merchant.address,
                zipCode: merchant.zipCode,
                city: merchant.city,
                country: merchant.country,
                description: merchant.description,
                websiteUrl: merchant.websiteUrl
            },
            {headers: this.headers})
            .pipe(map (response => response));
    }
}
