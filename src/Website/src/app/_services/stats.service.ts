import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Stats} from '../_models/stats';
import {DashboardAdminFilter} from "../_models/filter";
import {LocationParams} from "../_models/LocationParams";

@Injectable({providedIn: 'root'})
export class StatsService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'stats/';
    localUrlV2 = environment.baseUrlStats;

    /*localUrlV2 = environment.baseUrl + environment.v2 + 'stats/';*/

    constructor(private http: HttpClient) {
    }

    // BEGIN REGISTRY API
    getAdminTotalAmountGeneratedAndRedeemed(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("sourceId", filters.sourceId)

        return this.http.get(`${this.localUrlV1}vouchers/total-generated-redeemed`, {params})
    }

    getAdminTotalAmountConsumed(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantId", filters.merchantId)

        return this.http.get(`${this.localUrlV1}vouchers/total-consumed`, {params})
    }

    getAdminCreatedAmountByAim(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("sourceId", filters.sourceId)

        return this.http.get(`${this.localUrlV1}vouchers/total-generated-by-aim`, {params}).pipe()
    }

    getAdminTotalConsumedByAim(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantId", filters.merchantId)

        return this.http.get(`${this.localUrlV1}vouchers/total-consumed-by-aims`, {params});
    }

    getRankMerchants(filters: DashboardAdminFilter): Observable<any> {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantId", filters.merchantId)

        return this.http.get(`${this.localUrlV1}merchant/rank-consumed`, {params});
    }

    getVouchersConsumedByOffer(filters: DashboardAdminFilter) {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantId", filters.merchantId)

        return this.http.get(`${this.localUrlV1}merchant/voucher/total-consumed-by-offer`, {params});
    }

    getAmountOfAvailableVouchers(locationParams: LocationParams, merchantId: string) {
        let params = new HttpParams()
        if (locationParams.latitude != null) {
            params = params.set('latitude', locationParams.latitude.toString());
        }
        if (locationParams.longitude != null) {
            params = params.set('longitude', locationParams.longitude.toString());
        }
        if (locationParams.radius != null) {
            params = params.set('radius', locationParams.radius.toString());
        }
        if (merchantId) params = params.set('merchantId', merchantId);


        return this.http.get(`${this.localUrlV1}voucher/available`, {params});
    }

    getTotalConsumedOverTime(filters: DashboardAdminFilter) {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("merchantId", filters.merchantId)

        return this.http.get(`${this.localUrlV1}voucher/total-consumption-over-time`, {params});
    }

    getTotalGeneratedOverTime(filters: DashboardAdminFilter) {
        const params: HttpParams = new HttpParams()
            .set("startDate", filters.startDate)
            .set("endDate", filters.endDate)
            .set("sourceId", filters.sourceId)

        return this.http.get(`${this.localUrlV1}voucher/total-generated-redeemed-over-time`, {params});
    }


    downloadCsv(): Observable<Blob> {
        return this.http.get(`${this.localUrlV1}download/csv`, {responseType: 'blob'});
    }

// END REGISTRY API


    // SERVER STATISTICHE
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
