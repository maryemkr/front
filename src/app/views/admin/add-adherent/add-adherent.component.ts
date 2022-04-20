import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {
  msgError=""
 emailError = document.querySelector('.email.error');
     passwordError = document.querySelector('.mdp.error');
   
  constructor(private adherent:AdherentService, private route:Router) { 

  }

  ngOnInit(): void {
  }
  add(f:any){
    let data =f.value
    console.log(data)
    this.adherent.ajoutAdherent(data).subscribe((data)=>{
      this.route.navigate(['/admin/adherents'])
      console.log(this.passwordError)
    },(err:HttpErrorResponse)=>{
      this.msgError= err.error
      
    }
    
    )
  }
}
