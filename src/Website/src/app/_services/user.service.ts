import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User, UserLogin, UserRegistrationPayload} from '../_models';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {
    localUrlV1 = environment.baseUrl + environment.v1 + 'user/';
    localUrlV2 = environment.baseUrl + environment.v2 + 'user/';

    // Login data
    public currentUserLogin: Observable<UserLogin>;
    private currentUserLoginSubject: BehaviorSubject<UserLogin>;

    // User data
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient) {
        const localStorageUserLogin = UserLogin.fromJson(JSON.parse(localStorage.getItem('currentUserLogin')));
        this.currentUserLoginSubject = new BehaviorSubject<UserLogin>(localStorageUserLogin);
        this.currentUserLogin = this.currentUserLoginSubject.asObservable();

        const localStorageUser = User.fromJson(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserSubject = new BehaviorSubject<User>(localStorageUser);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentUserLoginValue(): UserLogin {
        return this.currentUserLoginSubject.value;
    }

    async checkAuthenticated(): Promise<boolean> {
        return this.currentUserSubject.getValue() !== null && this.currentUserSubject.getValue() !== undefined;
    }

    /**
     * Login and retrieve the user id and bearer token
     * @param email username is always email
     * @param password password associated for the username
     */
    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(this.localUrlV1 + 'login', {
            /*
            email,
            password,
            clientName: '',
            persistent: true
            */
        }, {
            observe: 'response',
            headers: {
                Authorization: 'Basic ' + btoa(email + ':' + password)
            }
        })
            .pipe(map(response => {
                // login successful if there's a valid user in the response
                if (response.body) {
                    const login = UserLogin.fromJson(response.body);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUserLogin', JSON.stringify(login));
                    this.currentUserLoginSubject.next(login);
                    return login;
                }
            }));
    }

    /**
     * Notify the server that the user has logged out & remove local storage data
     */
    logout(): void {
        this.http.post<any>(this.localUrlV1 + 'logout', {})
            .pipe(map(value => {
                console.log('logout: ' + value);
            }));

        // remove user from local storage to log user out
        localStorage.removeItem('currentUserLogin');
        localStorage.removeItem('currentUser');

        this.currentUserLoginSubject.next(null);
        this.currentUserSubject.next(null);
    }

    /**
     * Get user data for current user id
     */
    getLoggedUser(): Observable<User> {
        return this.http.get<User>(this.localUrlV1 + this.currentUserLoginSubject.value.id)
            .pipe(map(user => {
                // user id is correct if value is not null
                if (user) {
                    // hydrate a full User object from its JSON representation (to have its methods/logic)
                    user = User.fromJson(user);

                    // store user details in local storage to save user data in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    /**
     * Register a new user
     * @param data user data
     */
    register(data: UserRegistrationPayload): Observable<User> {
        return this.http.post<User>(this.localUrlV1 + 'register', data)
            .pipe(map(response => response));
    }

    /**
     * Update an existing user's data
     * @param data user data
     */
    update(data: UserRegistrationPayload): Observable<User> {
        return this.http.post<User>(this.localUrlV1 + this.currentUserLoginSubject.value.id,
            data).pipe(map (response => response));
    }

    /**
     * verify status of user account
     */
    verify(userId: string = null): Observable<any> {
        const id = userId != null ? userId : this.currentUserLoginSubject.value.id;
        return this.http.post<any>(this.localUrlV1 + id + '/verify', {})
            .pipe(map (response => response));
    }

    /**
     * verify status of user account
     */
    sendVerification(userId: string, token: string): Observable<any> {
        return this.http.post<any>(this.localUrlV1 + userId + '/verify?token=' + token, {})
            .pipe(map (response => response));
    }

    /**
     * request new verification email
     */
    requestVerificationEmail(userId: string = null): Observable<any> {
        const id = userId != null ? userId : this.currentUserLoginSubject.value.id;
        return this.http.post<any>(this.localUrlV1 + id + '/request-verification', {})
            .pipe(map (response => response));
    }

    /**
     * ask for password reset
     * @param email registered user's email (username)
     */
    passwordResetRequest(email: string): Observable<any> {
        return this.http.post<any>(this.localUrlV1 + 'password-reset',
            {email}).pipe(map (response => response));
    }

    /**
     * Send new password
     * @param userId user's id to reset password for
     * @param token confirmation token
     * @param password new password
     */
    passwordReset(userId: string, token: string, password: string): Observable<any> {
        return this.http.post<any>(this.localUrlV1 + userId + '/password-reset',
            {
                token,
                password
            }).pipe(map (response => response));
    }
}

