import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PosMap, PosMapContainer } from "../_models";
import { map } from "rxjs/operators";
import { PosWithOffers } from "../_models/offer";

@Injectable({ providedIn: "root" })
export class MapService {
  localUrlV1 = environment.baseUrl + environment.v1 + "offer/";
  localUrlV2 = environment.baseUrl + environment.v2 + "offer/";

  constructor(private http: HttpClient) {}

  getPosWithOffers(
    llx: string,
    urx: string,
    lly: string,
    ury: string
  ): Observable<PosWithOffers[]> {
    const params = new HttpParams()
      .set("llx", llx)
      .set("lly", lly)
      .set("urx", urx)
      .set("ury", ury);

    return this.http.post<any>(this.localUrlV1 + "search/box", {}, { params });
  }
}
