import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingsComponent } from './listings/listings.component';
import { CrpostComponent } from './crpost/crpost.component';
import { LisdetComponent } from './lisdet/lisdet.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { UserprofComponent } from './userprof/userprof.component';
import { ListeditComponent } from './listedit/listedit.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { CityfilterComponent } from './cityfilter/cityfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListingsComponent,
    CrpostComponent,
    LisdetComponent,
    MylistingsComponent,
    UserprofComponent,
    ListeditComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    MainhomeComponent,
    AdminpostComponent,
    CityfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
