import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class StorageService {
    public merchantFormKey = 'forms-merchant';
    public posFormKey = 'forms-pos';

    save(value: any, key: string) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }
}
