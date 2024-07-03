import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, of, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {User, UserLogin, UserMe, UserRegistrationPayload} from "../_models";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";

@Injectable({providedIn: "root"})
export class UserService {
    localUrlV1 = environment.baseUrl + environment.v1 + "user/";
    localUrlV2 = environment.baseUrl + environment.v2 + "user/";

    // Login data
    public currentUserLogin: Observable<UserMe>;
    private currentUserLoginSubject: BehaviorSubject<UserMe>;

    // User data
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    private userOwnership: BehaviorSubject<any> = new BehaviorSubject<any>({});

    public userOwnershipStatus = this.userOwnership.asObservable();

    constructor(private http: HttpClient, private storageService: StorageService) {
        const localStorageUserLogin = this.storageService.load("currentUserLogin");
        this.currentUserLoginSubject = new BehaviorSubject<UserMe>(
            localStorageUserLogin ? UserLogin.fromJson(localStorageUserLogin) : null
        );
        this.currentUserLogin = this.currentUserLoginSubject.asObservable();

        const localStorageUser = this.storageService.load("currentUser");
        this.currentUserSubject = new BehaviorSubject<User>(
            localStorageUser ? User.fromJson(localStorageUser) : null
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentUserLoginValue(): UserMe {
        return this.currentUserLoginSubject.value;
    }

    async checkAuthenticated(): Promise<boolean> {
        return (
            this.currentUserSubject.getValue() !== null &&
            this.currentUserSubject.getValue() !== undefined
        );
    }

    /**
     * Login and retrieve the user id and bearer token
     * @param email username is always email
     * @param password password associated for the username
     */
    login(email: string, password: string): Observable<any> {
        return this.http
            .post<any>(
                this.localUrlV1 + "login",
                {
                    /*
                      email,
                      password,
                      clientName: '',
                      persistent: true
                      */
                },
                {
                    observe: "response",
                    headers: {
                        Authorization: "Basic " + btoa(email + ":" + password),
                    },
                }
            )
            .pipe(
                map((response) => {
                    // login successful if there's a valid user in the response
                    if (response.body) {
                        const login = UserLogin.fromJson(response.body);
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem("currentUserLogin", JSON.stringify(login));
                        this.currentUserLoginSubject.next(login);
                        return login;
                    }
                })
            );
    }

    /**
     * Notify the server that the user has logged out & remove local storage data
     */
    logout(): void {
        this.http.post<any>(this.localUrlV1 + "logout", {}).pipe(
            map((value) => {
                console.log("logout: " + value);
            })
        );

        // remove user from local storage to log user out
        this.storageService.clearAllCacheAndLocalStorage()

        this.currentUserLoginSubject.next(null);
        this.currentUserSubject.next(null);
    }

    /**
     * Register a new user
     * @param data user data
     */
    register(data: UserRegistrationPayload): Observable<User> {
        return this.http
            .post<User>(this.localUrlV1 + "register", data)
            .pipe(map((response) => response));
    }

    me(): Observable<any> {
        const storageUser = this.storageService.load("currentUser");
        if (storageUser) {
            return of(storageUser)
        } else {
            return this.http.get<any>(this.localUrlV1 + "me").pipe(
                map((user) => {
                    user = User.fromJson(user);

                    // store user details in local storage to save user data in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    /*
                                    localStorage.setItem("merchantData", JSON.stringify(user.merchants));
                                    localStorage.setItem("instrumentData", JSON.stringify(user.sources));*/
                    return user;
                })
            );
        }
    }

    /**
     * Update an existing user's data
     * @param data user data
     */
    update(data: UserRegistrationPayload): Observable<User> {
        return this.http
            .post<User>(this.localUrlV1 + this.currentUserLoginSubject.value.id, data)
            .pipe(map((response) => response));
    }

    /**
     * verify status of user account
     */
    verify(userId: string = null): Observable<any> {
        const id = userId != null ? userId : this.currentUserLoginSubject.value.id;
        return this.http
            .post<any>(this.localUrlV1 + id + "/verify", {})
            .pipe(map((response) => response));
    }

    /**
     * verify status of user account
     */
    sendVerification(userId: string, token: string): Observable<any> {
        return this.http
            .post<any>(this.localUrlV1 + userId + "/verify?token=" + token, {})
            .pipe(map((response) => response));
    }

    /**
     * request new verification email using user id
     */
    requestVerificationEmailById(userId: string = null): Observable<any> {
        const id = userId != null ? userId : this.currentUserLoginSubject.value.id;
        return this.http
            .post<any>(this.localUrlV1 + id + "/request-verification", {})
            .pipe(map((response) => response));
    }

    /**
     * request new verification using e-mail
     */
    requestVerificationEmailByEmail(email: string = null): Observable<any> {
        const e = email != null ? email : this.currentUserValue.email;
        return this.http
            .post<any>(this.localUrlV1 + "request-verification", {
                email: e,
            })
            .pipe(map((response) => response));
    }

    /**
     * ask for password reset
     * @param email registered user's email (username)
     */
    passwordResetRequest(email: string): Observable<any> {
        return this.http
            .post<any>(this.localUrlV1 + "password-reset", {email})
            .pipe(map((response) => response));
    }

    /**
     * Send new password
     * @param userId user's id to reset password for
     * @param token confirmation token
     * @param password new password
     */
    passwordReset(
        userId: string,
        token: string,
        password: string
    ): Observable<any> {
        return this.http
            .post<any>(this.localUrlV1 + userId + "/password-reset", {
                token,
                password,
            })
            .pipe(map((response) => response));
    }

    updateUserOwnership(data: any) {
        this.userOwnership.next(data);
    }

    userCreate(
        name: string,
        surname: string,
        email: string,
        password: string,
        role: string
    ): Observable<any> {
        const body = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            verified: true,
            role: role,
        };

        return this.http.post<any>(`${this.localUrlV1}`, body).pipe(
            map((res) => {
                return res;
            })
        );
    }

    userEdit(
        id: string,
        user: User): Observable<any> {

        return this.http.put<any>(`${this.localUrlV1}${id}`, user).pipe(
            map((res) => {
                return res;
            })
        );
    }

    userSearch(name: string = "", email: string = ""): Observable<any> {
        let page = 1;
        let pageSize = 10;
        const params: HttpParams = new HttpParams()
            .set("name", name.toString())
            .set("email", email.toString())
            .set("page", page.toString())
            .set("pageSize", pageSize.toString());

        return this.http.get<any>(this.localUrlV1, {params}).pipe(
            map((res) => {
                return res;
            })
        );
    }

    getAllUsers(search: string,
                page: number,
                itemsPerPage: string = "10"): Observable<any> {
        const cachedUsers = this.storageService.get("usersList");
        if (cachedUsers) {
            return of(cachedUsers);
        } else {
            const params = new HttpParams()
                .set("search", search)
                .set("page", page.toString())
                .set("pageSize", itemsPerPage);
            return this.http.get(`${this.localUrlV1}`, {params}).pipe(
                tap({
                    next: (data) => {
                        console.log("I dati che stiamo caricando sono ", data)
                        this.storageService.set("usersList", data)
                    },
                    error: (err) => console.error("err ", err),
                }),
                map((res) => {
                    return res;
                }),
                catchError((err) => {
                    console.error("Error fetching instruments", err);
                    return throwError(() => new Error("Failed to fetch instruments"));
                })
            );
        }
    }

// Delete user
    delete(idUser: string): Observable<any> {
        return this.http.delete(`${this.localUrlV1}${idUser}`).pipe(
            tap({
                next: () => console.log(`Deleted user with id=${idUser}`),
                error: (err) => console.error(`Failed to delete user with id=${idUser}`, err)
            }),
            catchError(err => {
                console.error('Delete operation failed', err);
                return throwError(() => new Error('Failed to delete user'));
            })
        );
    }

}
