import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const registerURL = '/users/register';
    if (req.url.search(registerURL) === -1) {
      req = req.clone({
        setHeaders: {
          Accept: `application/json`,
                  'Content-Type': `application/json`,
          Authorization: `Bearer ${authService.getToken()}`
        }
      });
    }
    return next.handle(req);
  }
}
