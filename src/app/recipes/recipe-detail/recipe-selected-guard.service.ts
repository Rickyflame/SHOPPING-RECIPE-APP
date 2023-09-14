import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class RecipeSelectedGuardService implements CanActivate {
    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let id: number = +route.params['id']

        if(id == null || id == undefined || id == 0) {
            this.router.navigate(['/recipes/please-select'])
        } else {
            return true;
        }
    }
}