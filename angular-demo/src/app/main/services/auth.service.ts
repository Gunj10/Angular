import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: localStorage.getItem('access-token');
    const authReq = request.clone({
      setHeaders: {Authorization: 'bearer ' + token}
    });
    return next.handle(authReq);
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor, //overides interceptor with our interceptor
    //   multi: true
    // }
  }
}
