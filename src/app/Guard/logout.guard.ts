import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class LogoutGuard implements CanActivate
{

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> {
            const token = localStorage.getItem("token")
            if(token) {return false;
            }
            else {
                return true;
        }
    }

}