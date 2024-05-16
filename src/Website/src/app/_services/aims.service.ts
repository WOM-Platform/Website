import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Aim } from "../_models/aim";
import { environment } from "../../environments/environment";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { Merchant } from "../_models";
import { StorageService } from "./storage.service";

@Injectable({ providedIn: "root" })
export class AimsService {
  localUrlV1 = environment.baseUrl + environment.v1 + "aims/";
  localUrlV2 = environment.baseUrl + environment.v2 + "aims/";

  private aimsCache: Observable<any>;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  /**
   * List of all aims
   */
  getAll(): Observable<any> {
    // Check if data is in memory cache
    const cachedAims = this.storageService.get("aimsData");
    if (cachedAims) {
      return of(cachedAims);
    }

    // Check if data is in local storage
    const storedAims = this.storageService.load("aimsData");
    if (storedAims) {
      // Set it to memory cache and return as observable
      this.storageService.set("aimsData", storedAims);
      return of(storedAims);
    }

    // If not cached, fetch from API and cache the result
    if (!this.aimsCache) {
      console.log("request");
      this.aimsCache = this.http.get<Aim[]>(this.localUrlV2).pipe(
        tap((data) => {
          this.storageService.set("aimsData", data["aims"]);
          this.storageService.save(data["aims"], "aimsData");
        }),
        shareReplay(1),
        catchError((error) => {
          console.error("Error fetching aims data", error);
          throw error;
        })
      );
    }

    return this.aimsCache;
  }

  /**
   * Gets the information of a single aim
   * @param code Aim code, ex.: H
   */
  get(code: string): Observable<Aim> {
    return this.http
      .get<Aim>(environment.baseUrl + environment.v1 + "aim/" + code)
      .pipe(map((response) => response));
  }
}
