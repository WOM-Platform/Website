import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Stats } from "../_models/stats";
import { LocationParams } from "../_models/LocationParams";
import {
  MerchantFilter,
  DateFilter,
  InstrumentFilter,
  CombinedFilters,
} from "../_models/filter";

@Injectable({ providedIn: "root" })
export class StatsService {
  localUrlV1 = environment.baseUrl + environment.v1 + "stats/";
  localUrlV2 = environment.baseUrlStats;

  /*localUrlV2 = environment.baseUrl + environment.v2 + 'stats/';*/

  constructor(private http: HttpClient) {}

  // BEGIN REGISTRY API
  fetchVouchersGeneratedAndRedeemedStats(
    dateFilters: DateFilter,
    sourceFilters: InstrumentFilter
  ) {
    let requestData = {
      startDate: dateFilters.startDate
        ? this.convertToLocalISOString(dateFilters.startDate)
        : null,
      endDate: dateFilters.endDate
        ? this.convertToLocalISOString(dateFilters.endDate)
        : null,
      sourceId: sourceFilters?.sourceId || null,
      aimListFilter: sourceFilters?.aimListFilter || null,
    };

    return this.http.post(
      `${this.localUrlV1}vouchers/generated-redeemed-statistics`,
      requestData
    );
  }

  fetchVouchersConsumedStats(
    dateFilters: DateFilter,
    merchantFilters: MerchantFilter,
    location?: LocationParams
  ) {
    let requestData;
    requestData = {
      startDate: dateFilters.startDate
        ? this.convertToLocalISOString(dateFilters.startDate)
        : null,
      endDate: dateFilters.endDate
        ? this.convertToLocalISOString(dateFilters.endDate)
        : null,
      merchantIds: merchantFilters?.merchantIds || null,
    };
    if (location) {
      if (location.latitude != null) {
        requestData = {
          ...requestData,
          latitude: location.latitude.toString(),
        };
      }
      if (location.longitude != null) {
        requestData = {
          ...requestData,
          longitude: location.longitude.toString(),
        };
      }
      if (location.radius != null) {
        requestData = { ...requestData, radius: location.radius.toString() };
      }
    }
    return this.http.post(
      `${this.localUrlV1}vouchers/consumed-statistics`,
      requestData
    );
  }

  getAmountOfAvailableVouchers(
    locationParams: LocationParams,
    merchantId: string[]
  ) {
    let requestData = {};

    if (locationParams.latitude != null) {
      requestData = {
        ...requestData,
        latitude: locationParams.latitude.toString(),
      };
    }
    if (locationParams.longitude != null) {
      requestData = {
        ...requestData,
        longitude: locationParams.longitude.toString(),
      };
    }
    if (locationParams.radius != null) {
      requestData = {
        ...requestData,
        radius: locationParams.radius.toString(),
      };
    }
    if (merchantId) requestData = { ...requestData, merchantId: merchantId };

    return this.http.post(`${this.localUrlV1}voucher/available`, requestData);
  }

  getActiveOffers(
    dateFilters: DateFilter,
    merchantFilters: MerchantFilter
  ): Observable<any> {
    const requestData = {
      startDate: dateFilters.startDate || null,
      endDate: dateFilters.endDate || null,
      merchantIds: merchantFilters?.merchantIds || null,
    };
    return this.http.post(`${this.localUrlV1}offers/rank`, requestData);
  }

  getVouchersConsumedByOffer(
    dateFilters: DateFilter,
    merchantFilters: MerchantFilter
  ) {
    const requestData = {
      startDate: dateFilters.startDate || null,
      endDate: dateFilters.endDate || null,
      merchantId: merchantFilters.merchantIds || null,
    };
    return this.http.post(
      `${this.localUrlV1}merchant/voucher/total-consumed-by-offer`,
      requestData
    );
  }

  downloadCsv(filters: CombinedFilters): Observable<HttpResponse<Blob>> {
    const { startDate, endDate } = filters.dateFilters;
    const { merchantIds, merchantNames } = filters.merchantFilters;
    const { sourceId, sourceNames, aimListFilter } = filters.sourceFilters;
    let requestData = {
      startDate: startDate || null,
      endDate: endDate || null,
      sourceId: sourceId || null,
      sourceNames: sourceNames || null,
      aimListFilter: aimListFilter || null,
      merchantIds: merchantIds || null,
      merchantNames: merchantNames || null,
    };
    return this.http.post<Blob>(`${this.localUrlV1}download/csv`, requestData, {
      observe: "response",
      responseType: "blob" as "json",
    });
  }

  private convertToLocalISOString(date: Date): string {
    let offset = date.getTimezoneOffset() * 60000;
    let localISO = new Date(date.getTime() - offset).toISOString();

    return localISO;
  }
  // END REGISTRY API

  // SERVER STATISTICHE
  getAdminCreatedAmountByPosition(
    north,
    south,
    east,
    west,
    zoomLevel
  ): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set("north", north.toString())
      .set("south", south.toString())
      .set("east", east.toString())
      .set("west", west.toString())
      .set("zoomLevel", zoomLevel.toString());

    return this.http.get(
      `${this.localUrlV2}AdminDashboard/created-by-position`,
      { params }
    );
  }

  getPosTotalAmount(id: string): Observable<any> {
    return this.http.get(
      `${this.localUrlV2}MerchantDashboard/total-amount/${id}`
    );
  }

  getPosOffers(id: string): Observable<any> {
    return this.http.get(
      `${this.localUrlV2}MerchantDashboard/pos-offers/${id}`
    );
  }

  getPosBestOffer(id: string): Observable<any> {
    return this.http.get(
      `${this.localUrlV2}MerchantDashboard/best-offer/${id}`
    );
  }

  getStatsList(): Observable<Stats> {
    return this.http
      .get<Stats>(this.localUrlV1 + "vouchers")
      .pipe(map((values) => Stats.fromJson(values)));
  }

  getScorePos(id: string): Observable<any> {
    return this.http.get(`${this.localUrlV2}MerchantDashboard/score/${id}`);
  }
}
