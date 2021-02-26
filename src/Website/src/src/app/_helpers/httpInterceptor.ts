import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserLogin} from '../_models';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    noAuthStrings: string[] = ['aims', 'aim', 'auth/key', 'user/login', 'user/register', 'user/password-reset'];

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If true do nothing - auth header not needed
        if (this.noAuthStrings.some(str => req.url.includes(str))) {
            return next.handle(req);
        }

        const userLogin = localStorage.getItem('currentUserLogin');
        if (userLogin === null) {
            return next.handle(req);
        }
        const user: UserLogin = JSON.parse(userLogin);
        const duplicate = req.clone( {setHeaders: {
                Authorization: 'Bearer ' + user.token
            }});
        return next.handle(duplicate);
    }
}
