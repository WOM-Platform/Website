import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aim} from '../_models/aim';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Merchant} from "../_models";

@Injectable({providedIn: 'root'})
export class AimsService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'aims/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'aims/';

    constructor(private http: HttpClient) {
    }

    /**
     * List of all aims-tab recognized by the WOM platform
     */
    getAll(): Observable<Aim[]> {
        return this.http.get<Aim[]>(this.localUrlV2)
            .pipe(map((response: Aim[]) => {
                if (response)
                    return response['aims']
            }));
    }

    /**
     * Gets the information of a single aim
     * @param code Aim code, ex.: H
     */
    get(code: string): Observable<Aim> {
        return this.http.get<Aim>(environment.baseUrl + environment.v1 + 'aim/' + code)
            .pipe(map(response => response));
    }
}
