import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/cmp07-servicios/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.auth.hasToken()) {
      const token = this.auth.getToken()!;
      const headers = request.headers.append('Authorization', token);
      const authRequest = request.clone({headers});

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
