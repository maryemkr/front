import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CheBureauxComponent } from './views/admin/che-bureaux/che-bureaux.component';
import { MembreBureauxComponent } from './views/admin/membre-bureaux/membre-bureaux.component';
import { AddAdherentComponent } from './views/admin/add-adherent/add-adherent.component';
import { CookieService } from 'ngx-cookie-service';
import { UpdateAdherentComponent } from './views/admin/update-adherent/update-adherent.component';

@NgModule({
  declarations: [
    AppComponent,
    CheBureauxComponent,
    MembreBureauxComponent,
    AddAdherentComponent,
    UpdateAdherentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
