import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";


@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(
        private logginService: LoginService
    ){}

    checkAuthentication(path: string): boolean {
        const loggedIn = this.logginService.isLoggedIn()
        if(!loggedIn){
            this.logginService.handleLogin(`/${path}`)
        }
        return loggedIn
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkAuthentication(route.path)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        //return this.checkAuthentication(route.routeConfig.path)

        const idTela = route.routeConfig.data['idtela'];
        const permissions = this.userService.getPermissions();
        if (!permissions.includes(idTela)) {
          alert('Activation blocked');
          return false;
        }
        return true;
    }
}