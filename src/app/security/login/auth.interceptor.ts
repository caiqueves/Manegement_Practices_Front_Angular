import { Injectable, Injector } from "@angular/core";

import {
    HttpRequest,
    HttpInterceptor,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpHeaders
} from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { } from "@angular/common/http";

import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
       
        const loginService = this.injector.get(LoginService)

        let token = localStorage.getItem("X-PUSH-AUTH");            
       
        if(token != null && token != undefined && token != 'undefined'){
            const authRequest = req.clone({setHeaders : {'Authorization': `${token}`}})
            return next.handle(authRequest)    
        }
        
        if(loginService.isLoggedIn())
        {
            const authRequest = req.clone({setHeaders : {'Authorization': ` ${token}`}})
            return next.handle(authRequest)            
        }else{
            return next.handle(req) 
        }
    }
}