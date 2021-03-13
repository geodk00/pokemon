import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/enums/app-routes.enum';
import { LocalStorageService } from 'src/app/features/login/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  
  constructor(private readonly router:Router, private readonly localStorageService: LocalStorageService) {

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.localStorageService.getTrainer()) {
      return true
    }
    
    this.router.navigateByUrl( AppRoutes.LOGIN );
    return false;
  }
  
}
