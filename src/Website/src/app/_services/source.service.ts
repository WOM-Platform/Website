import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {catchError, concatMap, delay, map, tap} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {from, Observable, of, throwError} from "rxjs";
import {AimEditing} from "../_models";
import {Instrument, InstrumentEditing} from "../_models/instrument";
import {StorageService} from "./storage.service";

@Injectable({
    providedIn: "root",
})
export class SourceService {
    localUrlV1 = environment.baseUrl + environment.v1 + "source/";

    constructor(private http: HttpClient, private storageService: StorageService) {
    }

    /**
     * Fetches the list of instruments with optional search and pagination.
     *
     * @param {Object} options - The options for fetching instruments.
     * @param {string} [options.search] - The search term to filter instruments by name (optional).
     * @param {number} [options.page=1] - The current page of the pagination (optional, default is 1).
     * @param {string} [options.itemsPerPage="10"] - The number of items per page (optional, default is "10").
     *
     * @returns {Observable<any>} An observable of the instrument list, optionally paginated and filtered by search term.
     */
    getAllInstruments(
        options: {
            search?: string,
            page?: number,
            itemsPerPage?: string
        } = {}
    ): Observable<any> {
        const {search = '', page = 1, itemsPerPage = "10"} = options;

        // Define HttpParams
        const params = new HttpParams()
            .set("search", search)
            .set("page", page.toString())
            .set("pageSize", itemsPerPage);

        // If search is present, bypass cache and directly fetch from the API
        if (search) {
            return this.http.get(`${this.localUrlV1}`, {params}).pipe(
                map((res) => res),
                catchError((err) => {
                    console.error("Error fetching search results", err);
                    return throwError(() => new Error("Failed to fetch search results"));
                })
            );
        }

        // Check if cached data exists and return it if available
        const cachedInstruments = this.storageService.get("instrumentsList");
        if (cachedInstruments) {
            return of(cachedInstruments);
        }

        // If no cache and no search, fetch from API and cache the result
        return this.http.get(`${this.localUrlV1}`, {params}).pipe(
            tap({
                next: (data) => this.storageService.set("instrumentsList", data),
                error: (err) => {
                    console.error("err", err)
                }
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

    getInstrument(idInstrument: string): Observable<Instrument> {
        const url = `${this.localUrlV1}${idInstrument}/details`;
        return this.http.get<Instrument>(url).pipe(
            map((res: Instrument) => res),
            catchError((error) => {
                console.error('Error in getInstrument:', error);
                return throwError(error);
            })
        );
    }

    createInstrument(name: string, url: string, aims: AimEditing): Observable<any> {
        return this.http
            .post(`${this.localUrlV1}`, {
                name: name,
                url: url,
                aims: aims
            })
            .pipe(
                map((res) => res),
                catchError((error) => {
                    console.error("Error creating instrument:", error);
                    return throwError(() => new Error("Failed to create instrument"));
                })
            );
    }

    deleteInstrument(sourceId: string): Observable<any> {
        return this.http
            .delete(`${this.localUrlV1}${sourceId}`)
            .pipe(map((res) => res));
    }

    update(source: InstrumentEditing): Observable<InstrumentEditing> {
        return this.http
            .put<InstrumentEditing>(this.localUrlV1 + source.id, {
                name: source.name,
                url: source.url,
                aims: source.aims
            })
            .pipe(
                map(response => {
                    return response;
                })
            );
    }

    getInstrumentAccessList(idInstrument) {
        return this.http.get<any>(`${this.localUrlV1}${idInstrument}/access`).pipe(
            map((res) => {
                return res;
            }),
            catchError((err) => {
                console.error("Error fetching instrument access list", err);
                return throwError(err);
            })
        );
    }

    addInstrumentAccess(idInstrument: string, userId: string): Observable<any> {
        const url = `${this.localUrlV1}${idInstrument}/access?userId=${userId}`;
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

    addAccessSequentially(userId: string, accessArray: any): Observable<any> {
        return from(accessArray).pipe(
            concatMap((access) =>
                this.addInstrumentAccess(userId, access["id"].toString()).pipe(
                    delay(1000), // Delay of 1 second between each request
                    catchError((err) => {
                        console.error("Error in access processing", err);
                        return of("Error handled"); // Continue on error
                    })
                )
            )
        );
    }

    deleteInstrumentAccess(idInstrument, userId) {
        return this.http.delete(
            `${this.localUrlV1}${idInstrument}/access/${userId}`
        );
    }
}
