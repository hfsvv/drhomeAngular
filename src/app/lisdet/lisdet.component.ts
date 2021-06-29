import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-lisdet',
  templateUrl: './lisdet.component.html',
  styleUrls: ['./lisdet.component.css']
})
export class LisdetComponent implements OnInit {
  title=""
  address=""
  city=""
  state:any
  mobno:any
  whtspno:any
  description=""
  price=""
  bedrooms:any
  bathrooms:any
  sqft:any
  list_date:any
  photo_main:any
  list:any
  path:any="https://drhomes.herokuapp.com/"
  uname:any
  name=""
  wplink=""
  tok:any

  constructor(private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
    this.dataservice.details(this.router2.snapshot.params.id).subscribe(
        response=>{
          this.list=response
          // this.title= this.list.title
          // this.address=this.list.address
          // this.city= this.list.city
          // this.state= this.list.state
          // this.mobno= this.list.mobno
          // this.whtspno=this.list.whtspno
          // this.description= this.list.description
          // this.price= this.list.price
          // this.bedrooms=this.list.bedrooms
          // this.bathrooms= this.list.bathrooms
          // this.sqft= this.list.sqft
          // this.list_date= this.list.list_date
          // this.photo_main= this.list.photo_main
          console.log(this.list);
          console.log(this.list.title);
          for(let lists of this.list){
            this.wplink="https://wa.me/+91"+lists.whtspno+"?text=I'm%20interested%20in%20your%20home%20"+lists.title+"for%20sale"
          }
         
          
          
          
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
