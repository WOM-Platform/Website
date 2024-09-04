import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Stats} from '../_models/stats';
import {DashboardAdminFilter} from "../_models/filter";

@Injectable({providedIn: 'root'})
export class StatsService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'stats/';
    localUrlV2 = environment.baseUrlStats;

    /*localUrlV2 = environment.baseUrl + environment.v2 + 'stats/';*/

    constructor(private http: HttpClient) {
    }

    getAdminTotalAmountGeneratedAndRedeemed(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("sourceName", filters.sourceName)

        return this.http.get(`${this.localUrlV1}vouchers/total-generated-redeemed`, {params})
    }

    getAdminTotalAmountConsumed(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantName", filters.merchantName)

        return this.http.get(`${this.localUrlV1}vouchers/total-consumed`, {params})
    }

    getAdminCreatedAmountByAim(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("sourceName", filters.sourceName)

        return this.http.get(`${this.localUrlV1}vouchers/total-generated-by-aim`, {params}).pipe()
    }

    getAdminTotalConsumedByAim(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantName", filters.merchantName)

        return this.http.get(`${this.localUrlV1}vouchers/total-consumed-by-aims`, {params});
    }

    getAdminCreatedAmountByPosition(north, south, east, west, zoomLevel): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("north", north.toString())
            .set("south", south.toString())
            .set("east", east.toString())
            .set("west", west.toString())
            .set("zoomLevel", zoomLevel.toString())

        return this.http.get(`${this.localUrlV2}AdminDashboard/created-by-position`, {params})
    }

    getPosTotalAmount(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/total-amount/${id}`)
    }

    getPosOffers(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/pos-offers/${id}`)
    }

    getPosBestOffer(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/best-offer/${id}`)
    }

    getStatsList(): Observable<Stats> {
        return this.http.get<Stats>(this.localUrlV1 + 'vouchers').pipe(
            map(values => Stats.fromJson(values))
        );
    }

    getScorePos(id: string): Observable<any> {
        return this.http.get(`${this.localUrlV2}MerchantDashboard/score/${id}`)
    }

}
