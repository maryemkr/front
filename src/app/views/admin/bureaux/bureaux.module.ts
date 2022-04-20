import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BureauxRoutingModule } from './bureaux-routing.module';
import { BureauxComponent } from './bureaux.component';


@NgModule({
  declarations: [
    BureauxComponent
  ],
  imports: [
    CommonModule,
    BureauxRoutingModule
  ]
})
export class BureauxModule { }
