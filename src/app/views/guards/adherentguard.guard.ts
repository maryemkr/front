import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdherentguardGuard implements CanActivateChild {
  constructor(private auth:AuthServiceService, private route:Router){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise ((resolve,reject)=>{
        if(this.auth.chefBureau()==true || this.auth.membreBureau()==true){
          resolve(true)
        } else { this.route.navigate(['']) 
        reject(false)
      }
      })
  }
  
}
