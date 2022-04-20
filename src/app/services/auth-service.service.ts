import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   helper = new JwtHelperService();
  profil={
    prenom:'',
    role:''
  }


  constructor(private http:HttpClient) { }
  login(data :any){
    return this.http.post('http://localhost:3000/api/user/login',data)
  }
  isSaveToken(token:any){
 
let decodeToken= this.helper.decodeToken(token)
localStorage.setItem('token',token)  

  }
  getPrenom(){
    let token:any=localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.prenom
  }
  LoggedIn(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMCB' && role!=='ADMMB' && role!=='ADMO'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  chefBureau(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMCB'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  membreBureau(){
    let token:any=localStorage.getItem('token')
    if(!token){return false}
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
    if(role!=='ADMMB'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false
    }
    return true
  }
  
  

  
}
