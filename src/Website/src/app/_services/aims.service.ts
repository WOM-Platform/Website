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
    } else {
      this.aimsCache = this.http.get<Aim[]>(this.localUrlV2).pipe(
        tap({
          next: (data) => this.storageService.set("aimsData", data["aims"]),
          // this.storageService.save(data["aims"], "aimsData");
          error: (err) => console.error("err"),
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
