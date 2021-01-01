import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) {
  }

  /**
   * Method for check if the user is auth, if not redirect to auth page
   * @param route The route param
   * @param state The state param
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (ApiService.token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
