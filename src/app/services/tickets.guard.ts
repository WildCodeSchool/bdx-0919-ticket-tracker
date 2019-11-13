import { WsHelperService } from './ws-helper.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsGuard implements CanActivate {

  private token: string;

  constructor( private wsHelper: WsHelperService, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('TOKEN')) || null;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token != null) {
      this.wsHelper.setToken(this.token);
      return true;
  } else {
    return this.router.parseUrl('/home');
  }
}
}
