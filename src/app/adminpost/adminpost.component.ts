import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-adminpost',
  templateUrl: './adminpost.component.html',
  styleUrls: ['./adminpost.component.css']
})
export class AdminpostComponent implements OnInit {
  uname:any
  list:any
  usname:any
  path:any="https://drhomes.herokuapp.com/"
  name:any
  tok:any=localStorage.getItem("token")
  constructor(private fb:FormBuilder,private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }


  ngOnInit(): void {
    this.usname=localStorage.getItem("user")
    this.uname=this.dataservice2.ausercl()
    if(this.tok){
      this.dataservice.agetlist(this.tok).subscribe(
        data2=>{
          this.list=data2
          console.log(data2);
          
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
  dlt(id:any){
    
    this.dataservice.adlt(id,this.tok).subscribe(
      resp=>{
      alert("House is deleted")     
      this.dataservice.agetlist(this.tok).subscribe(
        data2=>{
          this.list=data2
          console.log(data2);
          
        },
        error=>{
          alert(error.statusText);
          this.router.navigateByUrl("admin")
        } 
      )
      
         } 
        )
      }
      logout(){
        this.usname=""
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.name=""
        this.dataservice2.auser(this.name)
        this.router.navigateByUrl("admin")
      }

}
