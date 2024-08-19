import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {BehaviorSubject, Observable, of, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {User, UserLogin, UserMe, UserRegistrationPayload} from "../_models";
import {environment} from "../../environments/environment";
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";
import {SnackBarService} from "./snack-bar.service";

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

    // Merchants and Sources cache
    private merchantsCacheSubject: BehaviorSubject<any[]>;
    public merchantsCache$: Observable<any[]>;

    private sourcesCacheSubject: BehaviorSubject<any[]>;
    public sourcesCache$: Observable<any[]>;

    currentUserData: Partial<UserMe>

    constructor(private http: HttpClient,
                private router: Router,
                private snackBarService: SnackBarService,
                private storageService: StorageService) {
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

        const localStorageMerchants = this.storageService.get("myMerchantData");
        this.merchantsCacheSubject = new BehaviorSubject<any[]>(
            localStorageMerchants ? JSON.parse(localStorageMerchants) : []
        );
        this.merchantsCache$ = this.merchantsCacheSubject.asObservable();

        const localStorageSources = this.storageService.get("myInstrumentData");
        this.sourcesCacheSubject = new BehaviorSubject<any[]>(
            localStorageSources ? JSON.parse(localStorageSources) : []
        );
        this.sourcesCache$ = this.sourcesCacheSubject.asObservable();
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
                    this.currentUserData = {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        role: user.role,
                        verified: user.verified,
                        merchants: user.merchants,
                        sources: user.sources
                    };
                    // store user details in local storage to save user data in between page refreshes
                    this.storageService.save(this.currentUserData, "currentUser")

                    user = User.fromJson(user);

                    this.currentUserSubject.next(user);

                    // save user's merchant and instrument on cache
                    this.storageService.set("myMerchantData", JSON.stringify(user.merchants));
                    this.merchantsCacheSubject.next(user.merchants);
                    this.storageService.set("myInstrumentData", JSON.stringify(user.sources));
                    this.sourcesCacheSubject.next(user.sources);

                    return user;
                })
            );
        }
    }

    getMerchants(): Observable<any[]> {
        return this.merchantsCache$;
    }

    getSources(): Observable<any[]> {
        return this.sourcesCache$;
    }

    /*    updateMyMerchants(myMerchant: any[], actionOn: string): void {
    
            this.storageService.set("myMerchantData", JSON.stringify(myMerchant));
            this.merchantsCacheSubject.next(myMerchant);
        }*/

    updateMySources(newSources: any[]): void {
        this.storageService.set("myInstrumentData", JSON.stringify(newSources));
        this.sourcesCacheSubject.next(newSources);
    }

    invalidateCache(): void {
        this.storageService.clearCache("myMerchantData");
        this.storageService.clearCache("myInstrumentData");

        this.merchantsCacheSubject.next([]);
        this.sourcesCacheSubject.next([]);
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
                .set("name", search)
                .set("email", search)
                .set("page", page.toString())
                .set("pageSize", itemsPerPage);
            return this.http.get(`${this.localUrlV1}`, {params}).pipe(
                tap({
                    next: (data) => {
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

    handle403Error(error: any) {
        if (error.status === 403) {
            // Clear any user-related data
            this.storageService.clearAllCacheAndLocalStorage();
            this.logout()
            // Redirect to login page
            this.router.navigate(['/authentication/signin']);
            // Show an error message
            this.snackBarService.openSnackBar('Session expired. Please log in again.');
        } else {
            console.error('An error occurred:', error);
        }
    }

}
