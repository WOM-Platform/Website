import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Merchant } from "../_models";
import { environment } from "../../environments/environment";
import { catchError, map, tap } from "rxjs/operators";
import { StripePrice } from "../_models/billing";
import { StorageService } from "./storage.service";

@Injectable({ providedIn: "root" })
export class MerchantService {
  localUrlV1 = environment.baseUrl + environment.v1 + "merchant/";
  localUrlV2 = environment.baseUrl + environment.v2 + "merchant/";

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  /**
   * Get merchant data from specific merchant id
   * @param id merchant id
   */
  getMerchantById(id: string): Observable<Merchant> {
    return this.http
      .get<Merchant>(this.localUrlV1 + id)
      .pipe(map((response) => response));
  }

  /**
   * Get merchant list
   */
  getAllMerchants(
    search: string,
    page: number,
    itemsPerPage: string = "10"
  ): Observable<any> {
    const cachedMerchants = this.storageService.get("merchantsList");
    if (cachedMerchants) {
      return of(cachedMerchants);
    } else {
      const params = new HttpParams()
        .set("search", search)
        .set("page", page.toString())
        .set("pageSize", itemsPerPage);
      return this.http.get(`${this.localUrlV1}`, { params }).pipe(
        tap({
          next: (data) => this.storageService.set("merchantsList", data),
          error: (err) => console.error("err ", err),
        }),
        map((res) => {
          return res;
        }),
        catchError((err) => {
          console.error("Error fetching instruments", err);
          return throwError(() => new Error("Failed to fetch instruments"));
        })
      );
    }
  }

  /**
   * Update all information of a merchant
   * @param merchant data to update
   */
  update(merchant: Merchant): Observable<Merchant> {
    return this.http
      .put<Merchant>(this.localUrlV1 + merchant.id, {
        name: merchant.name,
        fiscalCode: merchant.fiscalCode,
        primaryActivity: merchant.primaryActivity,
        address: merchant.address,
        enabled: merchant.enabled,
        zipCode: merchant.zipCode,
        city: merchant.city,
        country: merchant.country,
        description: merchant.description,
        url: merchant.url,
      })
      .pipe(map((response) => response));
  }

  /**
   * Create a new merchant
   * @param merchant data of merchant to create
   */
  register(merchant: Merchant): Observable<Merchant> {
    return this.http
      .post<Merchant>(this.localUrlV1, {
        name: merchant.name,
        fiscalCode: merchant.fiscalCode,
        primaryActivity: merchant.primaryActivity,
        address: merchant.address,
        zipCode: merchant.zipCode,
        city: merchant.city,
        country: merchant.country,
        description: merchant.description,
        url: merchant.url,
      })
      .pipe(map((response) => response));
  }

  deleteMerchant(merchantId: string) {
    return this.http
      .delete(`${this.localUrlV1}${merchantId}`)
      .pipe(map((res) => res));
  }

  getAccessList(idMerchant) {
    return this.http
      .get(`${this.localUrlV1}${idMerchant}/access`)
      .pipe(map((res) => res));
  }

  addAccess(idMerchant: string, userId: string, role: string = "Admin") {
    const url = `${this.localUrlV1}${idMerchant}/access?userId=${userId}&role=${role}`;
    return this.http.post(url, {}).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        console.error("Failed to add access:", err);
        return throwError(err);
      })
    );
  }

  deleteAccess(idMerchant: string, userId: string) {
    return this.http.delete(`${this.localUrlV1}${idMerchant}/access/${userId}`);
  }
}
