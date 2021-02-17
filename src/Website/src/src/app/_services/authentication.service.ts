import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../_models';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    const localStorageUser = User.fromJSON(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<User>(localStorageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  async checkAuthenticated(): Promise<boolean> {
    return this.currentUserSubject.getValue() !== null && this.currentUserSubject.getValue() !== undefined;
  }

  publicKey(): Observable<any> {
    return this.http.get<any>('https://wom.social/api/v1/auth/key')
      .pipe(map(value => value));
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://wom.social/api/v2/auth/merchant', {
      headers: {
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }
    })
      .pipe(map(user => {
        console.log(user);
        // login successful if there's a valid user in the response
        if (user) {
          // hydrate a full User object from its JSON representation (to have its methods/logic)
          user = User.fromJSON(user);

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
