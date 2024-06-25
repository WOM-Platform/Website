import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Aim, AimEditing} from "../_models/aim";
import {environment} from "../../environments/environment";
import {catchError, map, shareReplay, tap} from "rxjs/operators";
import {Merchant} from "../_models";
import {StorageService} from "./storage.service";

@Injectable({providedIn: "root"})
export class AimsService {
    localUrlV1 = environment.baseUrl + environment.v1 + "aims/";
    localUrlV2 = environment.baseUrl + environment.v2 + "aims/";

    private aimsCache: Observable<any>;

    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) {
    }

    /**
     * List of all aims
     */
    getAll(): Observable<Aim[]> {
        // Controlla se i dati sono nella cache in memoria
        const cachedAims = this.storageService.get("aimsData");
        if (cachedAims) {
            return of(cachedAims);
        } else {
            if (!this.aimsCache) {
                this.aimsCache = this.http.get<{ aims: Aim[] }>(this.localUrlV2).pipe(
                    tap({
                        next: (data) => this.storageService.set("aimsData", data.aims),
                        error: (err) =>
                            console.error("Error setting aims data in cache:", err),
                    }),
                    map((res) => res.aims),
                    shareReplay(1),
                    catchError((error) => {
                        console.error("Error fetching aims data", error);
                        throw error;
                    })
                );
            }
            return this.aimsCache;
        }
    }

    /**
     * Gets the information of a single aim
     * @param code Aim code, ex.: H
     */
    getByCode(code: string): Observable<Aim> {
        const cachedAims = this.storageService.get("aimsData");
        if (cachedAims) {
            const aim = cachedAims.find((a) => a.code === code);
            return aim;
        } else {
            this.getAll().pipe(
                map((aims) => {
                    const aim = aims.find((a) => a.code === code);
                    return aim;
                })
            );
        }
    }

    findMatchingCodes(aimList: Aim[], letters: string[]): Aim[] {
        return aimList.filter((aim) => letters.includes(aim.code));
    }


    transformToAimEditing(aims: Aim[], enableAll: boolean): AimEditing {
        if (!Array.isArray(aims) || typeof enableAll !== 'boolean') {
            throw new Error('Invalid input');
        }

        const aimsEditing: AimEditing = {
            enabled: aims.map(aim => aim.code),
            enableAll: enableAll
        };

        return aimsEditing;
    }

}
