import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Stats} from '../_models/stats';

@Injectable({providedIn: 'root'})
export class StatsService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'stats/';
    localUrlV2 = environment.baseUrlStats;
<<<<<<< HEAD

    /*localUrlV2 = environment.baseUrl + environment.v2 + 'stats/';*/
=======
>>>>>>> origin/dev

    /*localUrlV2 = environment.baseUrl + environment.v2 + 'stats/';*/
    
    constructor(private http: HttpClient) {
    }

<<<<<<< HEAD
    getAdminTotalAmountCreated(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'total-created')
    }

    getAdminTotalAmountConsumed(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'total-consumed')
    }

    getAdminCreatedAmountByAim(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'created-by-aim')
    }

    getAdminCreatedAmountByPosition(): Observable<any> {
        return this.http.get(`${this.localUrlV2}AdminDashboard/created-by-position`)
    }

    getPosTotalAmount(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/total-amount/${id}`)
    }

    getPosOffers(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/pos-offers/${id}`)
    }

    getPosBestOffer(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/best-offer/${id}`)
=======
    getTotalAmountCreated(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'total-created')
    }

    getTotalAmountConsumed(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'total-consumed')
    }

    getCreatedAmountByAim(): Observable<any> {
        return this.http.get(this.localUrlV2 + 'AdminDashboard/'+'created-by-aim')
    }

    getCreatedAmountByPosition(): Observable<any>{
        return this.http.get(this.localUrlV2 + 'AdminDashboard/' + 'created-by-position')
>>>>>>> origin/dev
    }

    getStatsList(): Observable<Stats> {
        console.log("get stats list ", this.localUrlV2)
        return this.http.get<Stats>(this.localUrlV1 + 'vouchers').pipe(
            map(values => Stats.fromJson(values))
        );
    }

    getScorePos(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/score/${id}`)
    }

}
