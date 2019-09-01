import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class InterceptService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    request.clone({setHeaders: {
      "Authorization": "This is sample auth"
    }});
    console.log("inside interceptor service");
    return next.handle(request);
  }

}
