import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AuthService } from 'ionic-appauth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oktaAuth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add an access token to whitelisted origins
    const allowedOrigins = ['http://localhost','https://www.bayat-catering.tech'];
    if (allowedOrigins.some(url => request.urlWithParams.includes(url))) {
      let  accessToken ='' ;
      this.oktaAuth.events$.subscribe(res=>{
        accessToken = res.tokenResponse.accessToken;
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + accessToken,
          }
        });
      });
    }
    return next.handle(request).toPromise();
  }
}
