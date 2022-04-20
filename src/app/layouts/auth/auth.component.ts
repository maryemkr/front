import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
dataReceived:any
msgError=""
  constructor(private auth:AuthServiceService , private route:Router) { 
    if(this.auth.LoggedIn()==true){
      this.route.navigate(['/admin'])
    }
  }

  ngOnInit(): void {
  }
  login(f:any){
    let data = f.value
    console.log(data)
    this.auth.login(data).subscribe((rps)=>
    {
      
      this.dataReceived=rps
      this.auth.isSaveToken(this.dataReceived.token)
    
      this.route.navigate(['/admin/'])

    },(err:HttpErrorResponse)=>{
      this.msgError= err.error
      console.log(this.msgError)
    }
    )
    
  }
}
