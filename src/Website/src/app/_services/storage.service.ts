import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class StorageService {
    public merchantFormKey = 'forms-merchant';
    public posFormKey = 'forms-pos';

    private cache = new Map<string, any>();

    /* LOCAL STORAGE DATA */
    save(value: any, key: string) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    loadCurrentUser(): any {
        const currentUserJson = localStorage.getItem('currentUser');
        if (currentUserJson) {
            const currentUser = JSON.parse(currentUserJson) as any;
            return currentUser;
        }
        return null;
    }

    loadAll(): { [key: string]: any } {
        const data: { [key: string]: any } = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key) {
                data[key] = JSON.parse(localStorage.getItem(key));
            }
        }
        return data;
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }

    /* CACHE DATA */
    set(key: string, data: any): void {
        this.cache.set(key, {data, expiry: Date.now() + 300000});
    }

    get(key: string): any {
        const item = this.cache.get(key);
        if (!item) {
            return null;
        }
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        return item.data;
    }

    getAll(): { [key: string]: any } {
        const data: { [key: string]: any } = {};
        this.cache.forEach((value, key) => {
            if (Date.now() <= value.expiry) {
                data[key] = value.data;
            }
        });
        return data;
    }

    clearCache(key: string): void {
        this.cache.delete(key);
    }

    clearAllCacheAndLocalStorage(): void {
        localStorage.clear()
        this.cache.clear();
    }


}
