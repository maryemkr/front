import { CookieService } from 'ngx-cookie-service';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})


export class AdherentService {
 
  constructor(private http:HttpClient) { 
    
  }
  getAllAdherent(){
      return  this.http.get('http://localhost:3000/api/user')

  }
  ajoutAdherent(profile:any){
    return this.http.post('http://localhost:3000/api/user/register',profile)
    
  }
  addAdherent(){
    
  }

}
