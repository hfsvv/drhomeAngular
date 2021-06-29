import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { CityfilterComponent } from './cityfilter/cityfilter.component';
import { CrpostComponent } from './crpost/crpost.component';
import { LisdetComponent } from './lisdet/lisdet.component';
import { ListeditComponent } from './listedit/listedit.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',component:MainhomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:ListingsComponent
  },
  {
    path:'home/:city',component:CityfilterComponent
  },
  {
    path:'post',component:CrpostComponent
  },
  {
    path:'listdet/:id',component:LisdetComponent
  },
  {
    path:'mylistings',component:MylistingsComponent
  },
  {
    path:'mylistings/:id',component:ListeditComponent
  },
  {
    path:'admin',component:AdminloginComponent
  },
  {
    path:'admin/post',component:AdminpostComponent
  },
  {
    path:'adminhome',component:AdmindashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
