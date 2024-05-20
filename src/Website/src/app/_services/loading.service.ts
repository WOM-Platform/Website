import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public loadingStatus = this.loading.asObservable();

    constructor() {
    }

    show() {
        this.loading.next(true);
    }

    // Function to set loading to false
    hide() {
        this.loading.next(false);
    }
}
