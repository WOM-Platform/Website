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

                    return res
                }
            )
        )
    }

    createInstrument(body: any): Observable<any> {
        console.log("Il body ")
        console.log(body)
        return this.http.post(`${this.localUrlV1}`, {'name': body.name, 'url': body.url}).pipe(map(res => res))
    }

    deleteInstrument(sourceId: string): Observable<any> {
        return this.http.delete(`${this.localUrlV1}${sourceId}`).pipe(map(res => res))
    }
}
