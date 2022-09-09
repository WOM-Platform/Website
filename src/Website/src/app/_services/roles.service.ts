import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RolesService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'roles/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'roles/';

    constructor(private http: HttpClient) {
    }

    getManagerStatus(): Observable<boolean> {
        return this.http.get<boolean>(this.localUrlV1).pipe();
    }
}
