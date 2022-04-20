import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';



@NgModule({
  declarations: [
    AuthComponent,
    NavDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class LayoutsModule { }
