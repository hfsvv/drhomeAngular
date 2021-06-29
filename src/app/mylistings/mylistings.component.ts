import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-mylistings',
  templateUrl: './mylistings.component.html',
  styleUrls: ['./mylistings.component.css']
})
export class MylistingsComponent implements OnInit {
  list:any
  path:any="https://drhomes.herokuapp.com/"
  uname:any
  name=""
  tok:any=localStorage.getItem("token")
  constructor(private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
    // var username=this.dataservice2.usercl()
   
    if(this.tok){
      this.dataservice.mylistings(this.uname,this.tok).subscribe(
       response=>{
         this.list=response
         console.log(this.list);
         
       } 
      )
    }
    else{
      alert("pls Login")
      this.router.navigateByUrl("login")
    }

  }
  dlt(id:any){
    if(this.tok){
    this.dataservice.dlt(id,this.tok).subscribe(
      resp=>{
      alert("Book is deleted")
      var username=this.dataservice2.usercl()
      if(this.tok){
        this.dataservice.mylistings(username,this.tok).subscribe(
         response=>{
           this.list=response
           console.log(this.list);
           
         } 
        )
      }
      else{
        alert("pls Login")
        this.router.navigateByUrl("")
      }
      })}
      else{
        alert("pls Login")
        this.router.navigateByUrl("login")
      }

}
logout(){
  
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  this.router.navigateByUrl("login")
  this.uname=""
  this.dataservice2.user(this.name)
  
}
}
