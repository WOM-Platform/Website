import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {catchError, concatMap, delay, map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {from, Observable, of, throwError} from "rxjs";

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
    getInstrumentList(search: string, page: number, itemsPerPage: number): Observable<any> {
        const params = new HttpParams()
            .set('search', search)
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
        }).pipe(map(res => res),
            catchError(error => {
                console.error('Error creating instrument:', error);
                return throwError(() => new Error('Failed to create instrument'));
            }))
    }
    
    deleteInstrument(sourceId: string): Observable<any> {
        return this.http.delete(`${this.localUrlV1}${sourceId}`).pipe(map(res => res))
    }

    getInstrumentAccessList(idInstrument) {
        return this.http.get(`${this.localUrlV1}${idInstrument}/access`).pipe(map(res => {
                    return res
                }
            )
        )
    }

    addInstrumentAccess(idInstrument: string, userId: string): Observable<any> {
        const url = `${this.localUrlV1}${idInstrument}/access?userId=${userId}`;  // Append parameters to URL
        return this.http.post(url, {})
            .pipe(
                map(res => {
                    console.log("Access added");
                    return res;
                }),
                catchError(err => {
                    console.error("Failed to add access:", err);
                    return throwError(err);
                })
            );
    }

    addAccessSequentially(userId: string, accessArray: any): Observable<any> {
        return from(accessArray).pipe(
            concatMap(access =>
                this.addInstrumentAccess(userId, access["id"].toString()).pipe(
                    delay(1000), // Delay of 1 second between each request
                    catchError(err => {
                        console.error('Error in access processing', err);
                        return of('Error handled'); // Continue on error
                    })
                )
            )
        );
    }


    deleteInstrumentAccess(idInstrument, userId) {
        return this.http.delete(`${this.localUrlV1}${idInstrument}/access/${userId}`)
    }
}