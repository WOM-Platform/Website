import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Merchants, Pos} from '../_models';


@Injectable({providedIn: 'root'})
export class AuthService {
  localUrlV1 = environment.baseUrl + environment.v1 + 'auth/';
  localUrlV2 = environment.baseUrl + environment.v2 + 'auth/';

  constructor(private http: HttpClient) {}

  /**
   * Retrieve available WOM sources for the authenticated user
   */
  sources(): Observable<any> {
    return this.http.get<any>(this.localUrlV1 + 'sources')
        .pipe(map(value => value));
  }

  /**
   * Retrieve available WOM POS for the authenticated user
   */
  pos(): Observable<Pos> {
    return this.http.get<Pos>(this.localUrlV1 + 'pos')
        .pipe(map(value => value));
  }

  /**
   * Retrieve the public key used by the WOM registry
   */
  publicKey(): Observable<any> {
    return this.http.get<any>(this.localUrlV2 + 'key') // Can use also v1
      .pipe(map(value => value));
  }

  /**
   * Retrieve available WOM Merchants for the authenticated user
   */
  merchants(): Observable<Merchants> {
    return this.http.post<Merchants>(this.localUrlV2 + 'merchant', {})
        .pipe(map(value => value));
  }
}
