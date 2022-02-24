import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PosMap, PosMapContainer} from '../_models';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MapService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'map/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'map/';

    constructor(private http: HttpClient) {
    }

    getPosList(llx: string, urx: string, lly: string, ury: string): Observable<PosMapContainer> {
        const params = '?llx=' + llx + '&urx=' + urx + '&lly=' + lly + '&ury=' + ury;
        return this.http.post<PosMapContainer>(this.localUrlV1 + 'pos' + params, { }).pipe(
            map(values => PosMapContainer.fromJson(values))
        );
    }
}
