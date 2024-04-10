import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SourceService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'source/';

    constructor(private http: HttpClient) {
    }


    getInstrumentList(page: number, itemsPerPage: number): Observable<any> {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('itemsPerPage', itemsPerPage.toString());
        return this.http.get(`${this.localUrlV1}`, {params}).pipe(map(res => {
                    console.log("uhihiudshi", res)
                    return res
                }
            )
        )
    }

    createInstrument(body: any): Observable<any> {
        return this.http.post(`${this.localUrlV1}`, {'name': body.name, 'url': body.url}).pipe(map(res => res))
    }

    deleteInstrument(sourceId: string): Observable<any> {
        return this.http.delete(`${this.localUrlV1}${sourceId}`).pipe(map(res => res))
    }

    getInstrumentAccessList(idInstrument) {
        return this.http.get(`${this.localUrlV1}${idInstrument}/access`).pipe(map(res => {
                    console.log("Gestori ", res)
                    return res
                }
            )
        )
    }

    addInstrumentAccess(idInstrument, userId) {
        let tmpUserId = '5e59446fbca34d0001ae210b'
        /*return this.http.post(`${this.localUrlV1}${idInstrument}/access/${userId}`, "")*/
        console.log("/v1/source/{sourceId}/access")
        console.log(`${this.localUrlV1}${idInstrument}/access`)
        return this.http.post(`${this.localUrlV1}${idInstrument}/access?userId=${tmpUserId}`, {}).pipe(map(res => {
            console.log("Inside")
            return res
        }))
    }

    deleteInstrumentAccess(idInstrument, userId) {
        return this.http.delete(`${this.localUrlV1}${idInstrument}/access/${userId}`)
    }
}
