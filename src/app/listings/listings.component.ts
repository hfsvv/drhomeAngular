import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }
  list:any
  path:any="https://drhomes.herokuapp.com/"
  uname:any
  name=""
  tok:any

  ngOnInit(): void {
    this.tok=localStorage.getItem("token")
    let httpHeaders=new HttpHeaders({
      'content-type':'application/json'
    })
    httpHeaders.set('token',this.tok)
    this.uname=localStorage.getItem("user")
   this.dataservice.getlist().subscribe(
    data2=>{
      this.list=data2
      console.log(data2);
      
    }
  )
}
logout(){
      
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  this.uname=""
  this.dataservice2.user(this.name)
}
}