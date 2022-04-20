import { AdherentguardGuard } from './views/guards/adherentguard.guard';
import { NavDashboardComponent } from './layouts/nav-dashboard/nav-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminGuardGuard } from './views/guards/admin-guard.guard';


const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'admin',component:NavDashboardComponent,canActivate:[AdminGuardGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'adherents',loadChildren:()=>import('./views/admin/adherent/adherent.module').then(m=>m.AdherentModule),canActivateChild:[AdherentguardGuard]},
    {path:'addAdherent',loadChildren:()=>import('./views/admin/add-adherent/add-adherent.module').then(m=>m.AddAdherentModule),canActivateChild:[AdherentguardGuard]},
    {path:'updateAdherent',loadChildren:()=>import('./views/admin/update-adherent/update-adherent.module').then(m=>m.UpdateAdherentModule),canActivateChild:[AdherentguardGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
