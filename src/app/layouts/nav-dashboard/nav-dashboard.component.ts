import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { AdherentguardGuard } from 'src/app/views/guards/adherentguard.guard';


@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent implements OnInit {
  prenom:any
  verif:boolean=false
  constructor(private auth:AuthServiceService , private route:Router) { 
    if(this.auth.chefBureau()==true || this.auth.membreBureau()==true){
      this.verif=true
    }
    this.prenom = this.auth.getPrenom()
    console.log(this.prenom);
   
    
  }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('token')
  this.route.navigate([''])
}
}
