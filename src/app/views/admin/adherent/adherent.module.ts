import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdherentRoutingModule } from './adherent-routing.module';
import { AdherentComponent } from './adherent.component';


@NgModule({
  declarations: [
    AdherentComponent
  ],
  imports: [
    CommonModule,
    AdherentRoutingModule
  ]
})
export class AdherentModule { }
