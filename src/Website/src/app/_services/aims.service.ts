import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aim} from '../_models/aim';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Merchant} from "../_models";

@Injectable({providedIn: 'root'})
export class AimsService {

    constructor(private http: HttpClient) {}

    /**
     * List of all aims recognized by the WOM platform
     */
    getAll(): Observable<Aim[]>{
        return this.http.get<Aim[]>(environment.baseUrl + environment.v2 + 'aims') // can change with v1
            .pipe(map(response => {
                const data: Aim[] = [];
                response.forEach((val: Aim) => {
                    const prod = Aim.fromJson(val);
                    data.push(prod);
                });
                return data;
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
