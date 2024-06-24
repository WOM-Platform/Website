import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable, of, throwError} from 'rxjs';
import {Pos, PosRegistration} from '../_models';
import {environment} from '../../environments/environment';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Offer} from "../_models/offer";

@Injectable({providedIn: 'root'})
export class PosService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'pos/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'pos/';

    constructor(private http: HttpClient) {
    }

    /**
     * Get merchant data from specific pos id
     * @param id pos id
     */
    get(id: string): Observable<Pos> {
        return this.http.get<Pos>(this.localUrlV1 + id)
            .pipe(map(response => response));
    }

    /**
     * Update all information of a pos
     * @param pos data to update
     */
    update(pos: Pos): Observable<Pos> {
        return this.http.put<Pos>(this.localUrlV1 + pos.id,
            {
                name: pos.name,
                latitude: pos.latitude,
                longitude: pos.longitude,
                url: pos.url,
                isActive: pos.isActive
            })
            .pipe(map(response => response));
    }

    /**
     * Create a new pos for a merchant
     * @param pos data of pos to create
     */
    register(pos: PosRegistration): Observable<Pos> {
        return this.http.post<Pos>(this.localUrlV1,
            {
                ownerMerchantId: pos.ownerMerchantId,
                name: pos.name,
                latitude: pos.latitude,
                longitude: pos.longitude,
                url: pos.url
            })
            .pipe(map(response => response));
    }

    delete(idPos: string) {
        return this.http.delete(`${this.localUrlV1}${idPos}?dryRun=false`)
    }


    // get list of offers of a POS and embed offer image
    getOffers(posId: string): Observable<any> {
        return this.http.get(`${this.localUrlV1}${posId}/offers`, {}).pipe(
            switchMap((offers: any[]) => {
                if (offers.length <= 0) {
                    return of([])
                }
                const offerDetailsRequests = offers.map(offer =>
                    this.http.get(`https://dev.wom.social/api/render/offer/${offer.id}`, {responseType: 'blob'}).pipe(
                        map((offerDetails: any) => {
                            console.log("ouvrez les frontieres ", offerDetails)
                            return {
                                ...offer,
                                imageBlob: offerDetails
                            }
                        }),
                        catchError(err => {
                            console.error(`Error fetching image`)
                            return of({...offer, image: null})
                        })
                    )
                );
                return forkJoin(offerDetailsRequests)
            }),
            catchError(err => {
                console.error(err)
                return of([])
            }))
    }

    getOfferQrCode(offer: Offer): Observable<any> {
        return this.http.get(`https://dev.wom.social/api/render/offer/${offer.id}`, {responseType: 'blob'}).pipe(
            map((offerDetails: any) => {

                return {
                    ...offer,
                    imageBlob: offerDetails
                }
            }),
            catchError(err => {
                console.error(`Error fetching image`)
                return of({...offer, image: null})
            })
        )
    }

    // create a new offer
    createOffer(posId, data): Observable<any> {
        console.log("Create offer")
        return this.http.post(`${this.localUrlV1}${posId}/offers`, data)
    }

    // to delete offer
    deleteOffer(posId: string, offerId) {
        return this.http.delete(`${this.localUrlV1}${posId}/offers/${offerId}`)
    }

    // TO MOVE IN UTILS
    uploadFile(posId: string, file: File): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('image', file, file.name);
        formData.append('posId', posId);


        const headers = new HttpHeaders({
            'Name': 'file',
            'Content-Disposition': `form-data; name="file"; filename="${file.name}"`,
            'FileName': file.name
        });

        return this.http.post<any>(`${this.localUrlV1}${posId}/cover`, formData, {
            headers: headers,
            reportProgress: true,
            observe: 'events'
        }).pipe(
            map((event: HttpEvent<any>) => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                        const progress = Math.round(100 * event.loaded / (event.total ? event.total : 1));
                        console.log(`File is ${progress}% uploaded`);
                        break;
                    case HttpEventType.Response:
                        console.log('File is uploaded');
                        break;
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('File upload failed', error);
                return throwError(() => new Error('File upload failed. Please try again later.'));
            })
        );
    }

    // TO MOVE IN UTILS
    convertBlobToBase64(blob: Blob): Observable<string> {
        return new Observable(observer => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                observer.next(reader.result as string);
                observer.complete();
            };
            reader.onerror = error => {
                observer.error(error);
            };
        });
    }
}
