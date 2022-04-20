import { AdherentService } from './../../../services/adherent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {
  dataArray:any=[]
  constructor(private adherent:AdherentService) { 
    this.adherent.getAllAdherent().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }

}
