import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-cityfilter',
  templateUrl: './cityfilter.component.html',
  styleUrls: ['./cityfilter.component.css']
})
export class CityfilterComponent implements OnInit {

  constructor(private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }
  list:any
  path:any="https://drhomes.herokuapp.com/"
  uname:any
  name=""

  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
   this.dataservice.filtercity(this.router2.snapshot.params.city).subscribe(
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

