import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

    private cookie: string | null = null // Consultaremos al navegador

    constructor( private router: Router) {

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie()
  }

  private checkCookie (): boolean {
    console.log('ESTADO: ', this.cookie)
    if(this.cookie !== null) {
        return true
    }else{
        this.router.navigate(['/', 'auth', 'login']);
        return false
    }
  }
}
