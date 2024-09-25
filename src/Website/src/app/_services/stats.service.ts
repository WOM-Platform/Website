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
    fetchVouchersGeneratedAndRedeemedStats(filters: DashboardAdminFilter) {
        let requestData = {
            startDate: filters.startDate || null,
            endDate: filters.endDate || null,
            sourceId: filters.sourceId || null,

        }


        return this.http.post(`${this.localUrlV1}vouchers/generated-redeemed-statistics`, {requestData})
    }

    fetchVouchersConsumedStats(filters: DashboardAdminFilter, location: LocationParams) {
        let requestData;
        requestData = {
            startDate: filters.startDate || null,
            endDate: filters.endDate || null,
            merchantId: filters.merchantId || null
        }
        if (location.latitude != null) {
            requestData = {...requestData, 'latitude': location.latitude.toString()}
        }
        if (location.longitude != null) {
            requestData = {...requestData, 'longitude': location.longitude.toString()}
        }
        if (location.radius != null) {
            requestData = {...requestData, 'radius': location.radius.toString()}
        }

        return this.http.post(`${this.localUrlV1}vouchers/consumed-statistics`, {requestData});
    }

    getAdminTotalAmountGeneratedAndRedeemed(filters: DashboardAdminFilter): Observable<any> {
        const requestData = {
            startDate: filters.startDate || null,
            endDate: filters.endDate || null,
            sourceId: filters.sourceId || null,
        }

        return this.http.post(`${this.localUrlV1}vouchers/total-generated-redeemed`, {requestData})
    }

    getAdminTotalAmountConsumed(filters: DashboardAdminFilter): Observable<any> {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "merchantId": filters.merchantId || null,
        }

        return this.http.post(`${this.localUrlV1}vouchers/total-consumed`, {requestData})
    }

    getAdminCreatedAmountByAim(filters: DashboardAdminFilter): Observable<any> {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "sourceId": filters.sourceId || null,
        }

        return this.http.post(`${this.localUrlV1}vouchers/total-generated-by-aim`, {requestData}).pipe()
    }

    getAdminTotalConsumedByAim(filters: DashboardAdminFilter): Observable<any> {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "merchantId": filters.merchantId || null,
        }

        return this.http.post(`${this.localUrlV1}vouchers/total-consumed-by-aims`, {requestData});
    }

    getTotalGeneratedOverTime(filters: DashboardAdminFilter) {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "sourceId": filters.sourceId || null,
        }

        return this.http.post(`${this.localUrlV1}voucher/total-generated-redeemed-over-time`, {requestData});
    }

    getTotalConsumedOverTime(filters: DashboardAdminFilter) {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "merchantId": filters.merchantId || null,
        }
        return this.http.post(`${this.localUrlV1}voucher/total-consumption-over-time`, {requestData});
    }

    getAmountOfAvailableVouchers(locationParams: LocationParams, merchantId: string) {
        let requestData = {}

        if (locationParams.latitude != null) {
            requestData = {...requestData, 'latitude': locationParams.latitude.toString()}
        }
        if (locationParams.longitude != null) {
            requestData = {...requestData, 'longitude': locationParams.longitude.toString()}
        }
        if (locationParams.radius != null) {
            requestData = {...requestData, 'radius': locationParams.radius.toString()}
        }
        if (merchantId) requestData = {...requestData, 'merchantId': merchantId}

        return this.http.post(`${this.localUrlV1}voucher/available`, {requestData});
    }

    getVouchersConsumedByOffer(filters: DashboardAdminFilter) {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "merchantId": filters.merchantId || null,
        }
        return this.http.post(`${this.localUrlV1}merchant/voucher/total-consumed-by-offer`, {requestData});
    }

    getRankMerchants(filters: DashboardAdminFilter): Observable<any> {
        const requestData = {
            "startDate": filters.startDate || null,
            "endDate": filters.endDate || null,
            "merchantId": filters.merchantId || null,
        }

        return this.http.post(`${this.localUrlV1}merchant/rank-consumed`, {requestData});
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
