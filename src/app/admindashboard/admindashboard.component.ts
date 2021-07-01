import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  users:any
  uname:any
  usname:any
  name=""
  path:any="https://drhomes.herokuapp.com/"
  tok:any=localStorage.getItem("token")
  constructor(private fb:FormBuilder,private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.usname=localStorage.getItem("user")
    // this.uname=this.dataservice2.ausercl()
    if(this.tok){
    this.dataservice.users(this.tok).subscribe(
      response=>{
        console.log(response);
        this.users=response
      
      },
      error=>{
        alert(error.statusText);
        console.log(error);
      
      } 
    )
  }
  else{
    alert("Pls Login")
    this.router.navigateByUrl("admin")
  }
  

}
logout(){
  this.usname=""
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  this.router.navigateByUrl("admin")
  this.name=""
  this.dataservice2.auser(this.name)
}
dlt(uname:any){
  this.dataservice.dltuser(uname,this.tok).subscribe(
    response=>{
      alert("user deleted")
      if(this.tok){
        this.dataservice.users(this.tok).subscribe(
          response=>{
            console.log(response);
            this.users=response
          
          },
          error=>{
            alert(error.statusText);
            this.router.navigateByUrl("admin")
          } 
        
        )
      }
      else{
        alert("Pls Login")
        this.router.navigateByUrl("admin")
      }

    }
  )


  
}
}
