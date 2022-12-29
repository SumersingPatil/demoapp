import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';

import { UserregistrationComponent } from './user/userregistration/userregistration.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    DashboardComponent,
    HeaderComponent,
    MainfooterComponent,
    MainheaderComponent,
    UserloginComponent,
    UserhomeComponent,
    ManageproductComponent,
    UserregistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
