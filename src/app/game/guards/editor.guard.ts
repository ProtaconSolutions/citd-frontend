import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class EditorGuard implements CanActivate {
  /**
   * Constructor of the class.
   *
   * @param {LocalStorageService} localStorage
   * @param {Router}              router
   */
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  /**
   * Purpose of this guard is check if current user has given a nick for game or not. If nick is not found user is
   * redirected to 'game/entry' route.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {boolean}
   */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.localStorage.retrieve('nick')) {
      return true;
    }

    this.router.navigate(['/game/entry']);

    return false;
  }
}
