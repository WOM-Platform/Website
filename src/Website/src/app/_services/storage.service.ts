import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class StorageService {
    public merchantFormKey = 'forms-merchant';
    public posFormKey = 'forms-pos';

    private cache = new Map<string, any>();

    save(value: any, key: string) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }

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

    clearCache(key: string): void {
        this.cache.delete(key);
    }

    clearAllCache(): void {
        this.cache.clear();
    }
}
