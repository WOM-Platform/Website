import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pos, PosRegistration} from '../_models';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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
            .pipe(map (response => response));
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
            .pipe(map (response => response));
    }
}
