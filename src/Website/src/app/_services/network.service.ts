import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  private onlineSubject: BehaviorSubject<boolean>;

  constructor() {
    this.onlineSubject = new BehaviorSubject<boolean>(navigator.onLine);

    window.addEventListener("online", () => this.updateOnlineStatus(true));
    window.addEventListener("offline", () => this.updateOnlineStatus(false));
  }

  private updateOnlineStatus(isOnline) {
    this.onlineSubject.next(isOnline);
  }

  get isOnline(): Observable<boolean> {
    return this.onlineSubject.asObservable();
  }
}
