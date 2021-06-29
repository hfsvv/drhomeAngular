import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {
  uname:any
  name=""
  constructor(private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
    // alert(this.uname)
  }
  logout(){
      
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      this.uname=""
      this.dataservice2.user(this.name)
  }

}
