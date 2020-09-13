import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginServiceProxyService } from '../login/login-service-proxy.service';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginServiceProxyService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.getToken() === '') {
      this.router.navigate(['login']);

      return false;
    }

    return true;
  }
}
