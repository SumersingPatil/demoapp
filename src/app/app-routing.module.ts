import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';



const routes: Routes = [
  {path:'admin/adminlogin', component:AdminloginComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'admin/dashboard', component:DashboardComponent},
  {path:'', component:UserhomeComponent},
  {path:'user/login', component:UserloginComponent},
  {path:'admin/manageproduct', component:ManageproductComponent},
  {path:'user/registration', component:UserregistrationComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
