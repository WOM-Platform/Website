import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {Merchant, Merchants, Pos} from '../_models';


@Injectable({providedIn: 'root'})
export class AuthService {
  headers: HttpHeaders;

  constructor(private http: HttpClient,
              private userService: UserService) {
    if (!userService.currentUserLoginValue) {
      return;
    }

    this.headers = new HttpHeaders({
      Authorization: `Bearer ${userService.currentUserLoginValue.token}`
    });
  }

  /**
   * Retrieve available WOM sources for the authenticated user
   */
  sources(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + environment.v1 + 'auth/sources',
        {headers: this.headers})
        .pipe(map(value => value));
  }

  /**
   * Retrieve available WOM POS for the authenticated user
   */
  pos(): Observable<Pos> {
    return this.http.get<Pos>(environment.baseUrl + environment.v1 + 'auth/pos',
        {headers: this.headers})
        .pipe(map(value => value));
  }

  /**
   * Retrieve the public key used by the WOM registry
   */
  publicKey(): Observable<any> {
    return this.http.get<any>(environment.baseUrl +  environment.v1 + 'auth/key')
      .pipe(map(value => value));
  }

  /**
   * Retrieve available WOM Merchants for the authenticated user
   */
  merchants(): Observable<Merchants> {
    return this.http.get<Merchants>(environment.baseUrl + environment.v2 + 'auth/merchant',
        {headers: this.headers})
        .pipe(map(value => value));
  }
}
