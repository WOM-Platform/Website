import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {Aim} from '../_models/aim';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AimsService {
    headers: HttpHeaders;

    constructor(private http: HttpClient,
                private userService: UserService) {
        this.headers = new HttpHeaders({
            Authorization: `Bearer ${userService.currentUserLoginValue.token}`
        });
    }

    /**
     * List of all aims recognized by the WOM platform
     */
    getAll(): Observable<Aim[]>{
        return this.http.get<Aim[]>(environment.baseUrl + environment.v1 + 'aims')
            .pipe(map(response => response));
    }
}
