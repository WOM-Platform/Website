import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SourceService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'source/';

    constructor(private http: HttpClient) {
    }

    /**
     * Fetches the list of instruments with pagination.
     * @param {number} page The current page of the pagination.
     * @param {number} itemsPerPage Number of items per page.
     * @returns {Observable<any>} An observable of the paginated instrument list.
     */
    getInstrumentList(page: number, itemsPerPage: number): Observable<any> {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('itemsPerPage', itemsPerPage.toString());
        return this.http.get(`${this.localUrlV1}`, {params})
            .pipe(
                map(res => res),
                catchError(err => {
                    console.error("Error fetching instruments", err);
                    return throwError(() => new Error("Failed to fetch instruments"));
                })
            );
    }

    createInstrument(name: string, url: string): Observable<any> {
        return this.http.post(`${this.localUrlV1}`, {
            'name': name,
            'url': url
        }).pipe(map(res => res))
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

    addInstrumentAccess(idInstrument: string, userId: string): Observable<any> {
        const url = `${this.localUrlV1}${idInstrument}/access?userId=${userId}`;  // Append parameters to URL
        console.log("utente ", idInstrument);
        console.log("access ", userId)
        return this.http.post(url, {})
            .pipe(
                map(res => {
                    console.log("Access added");
                    return res;
                })
            );
    }


    deleteInstrumentAccess(idInstrument, userId) {
        return this.http.delete(`${this.localUrlV1}${idInstrument}/access/${userId}`)
    }
}
