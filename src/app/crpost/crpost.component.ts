import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-crpost',
  templateUrl: './crpost.component.html',
  styleUrls: ['./crpost.component.css']
})
export class CrpostComponent implements OnInit {
  postForm=this.fb.group({
    title:[''],
    address:[''],
    city:[''],
    state:[''],
    mobno:[''],
    whtspno:[''],
    description:[''],
    price:[''],
    bedrooms:[''],
    bathrooms:[''],
    sqft:['']


  })
  selectimage:any
  selectimage2:any
  uname:any
  name=""
  tok:any=localStorage.getItem("token")
  constructor(private fb:FormBuilder,private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
    // // var user=this.dataservice2.usercl()
    // if(!this.uname){
    //   alert("Pls Login")
    //   this.router.navigateByUrl("login")
    // }
  }
  fileup(event:any){
    if(event.target.files.length>0){
      this.selectimage=event.target.files[0];
      // this.regForm.get('prof_pic').setValue(this.selectimage)
      this.selectimage2=event.target.files[0].name;
      

    }
  }
  logout(){
      
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    this.uname=""
    this.dataservice2.user(this.name)
    this.router.navigateByUrl("login")
}
  posts(){
    var data:any={
      "title":this.postForm.value.title,
    "address":this.postForm.value.address,
    "city":this.postForm.value.city,
    "state":this.postForm.value.state,
    "mobno":this.postForm.value.mobno,
    "whtspno":this.postForm.value.whtspno,
    "description":this.postForm.value.description,
    "price":this.postForm.value.price,
    "bedrooms":this.postForm.value.bedrooms,
    "bathrooms":this.postForm.value.bathrooms,
    "sqft":this.postForm.value.sqft,
    }
    // console.log(data);
    let formData:FormData=new FormData
    if(this.selectimage){
      formData.append("photo_main",this.selectimage ,this.selectimage2)
    }
    for (let key in data){
      formData.append(key,data[key])
    }
    console.log(data);
    
    console.log(formData);
    
    var user=localStorage.getItem('user')
    if(this.tok){
    this.dataservice.crpost(data,user,this.tok).subscribe(
      response=>{
        console.log(response);
        alert("success")
        this.router.navigateByUrl("home")
      
    },
    
    error=>{
     console.log(error);
     alert(error.message)
      
    }
  );
    } 
  else{
    alert("Login Required")
    this.router.navigateByUrl("login")

  }
    

  }
}
