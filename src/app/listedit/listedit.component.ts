import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css']
})
export class ListeditComponent implements OnInit {
  uname:any
  name=""
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
  postForm=this.fb.group({
    title:[],
    address:[''],
    city:[''],
    state:[''],
    mobno:[''],
    whtspno:[''],
    description:[''],
    price:[''],
    bedrooms:[''],
    bathrooms:[''],
    sqft:[''],
    photo_main:['']


  })
  tok:any=localStorage.getItem("token")
  path:any="http://127.0.0.1:8000"
  lists:any
  list:any
  selectimage:any
  selectimage2:any
  constructor(private fb:FormBuilder,private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
    this.uname=localStorage.getItem("user")
    var username=this.dataservice2.usercl()
   
    if(this.uname){
    this.dataservice.adetails(this.router2.snapshot.params.id,this.tok).subscribe(
      response=>{
        this.list=response
       for(let lists of this.list){
          this.title=lists.title
          this.address=lists.address
          this.city=lists.city
          this.state=lists.state
          this.mobno=lists.mobno
          this.whtspno=lists.whtspno
          this.description=lists.description
          this.price=lists.price
          this.bedrooms=lists.bedrooms
          this.bathrooms=lists.bathrooms
          this.sqft=lists.sqft
          this.list_date=lists.sqft
          this.photo_main=lists.photo_main
       }
        this.postForm.patchValue({
          title:this.title,
          address:this.address,
          city:this.city,
          state:this.state,
          mobno:this.mobno,
          whtspno:this.whtspno,
          description:this.description,
          price:this.price,
          bedrooms:this.bedrooms,
          bathrooms:this.bathrooms,
          sqft:this.sqft,
          list_date:this.list_date,
          photo_main:this.path+this.photo_main
         
          
          

        })
       
        // console.log(this.list);
       
      
      
        
        
        
      }
  )
  }
  else{
    alert("pls Login")
    this.router.navigateByUrl("login")
  }
}
  fileup(event:any){
    if(event.target.files.length>0){
      this.selectimage=event.target.files[0];
      // this.regForm.get('prof_pic').setValue(this.selectimage)
      this.selectimage2=event.target.files[0].name;
      

    }
  }
  
  posts(){
    var user=this.dataservice2.usercl()
    if(this.tok){
    var data:any={
      "uname":this.uname,
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
    // "photo_main":this.photo_main
    }
    console.log(data);
    let formData:FormData=new FormData
    console.log(this.selectimage);
    if(this.selectimage){
     
      
      formData.append("photo_main",this.selectimage ,this.selectimage2)
    }
    for (let key in data){
      formData.append(key,data[key])
    }
    
    console.log(formData);
    this.dataservice.edit(this.router2.snapshot.params.id,formData,this.tok).subscribe(
      response=>{
        console.log(data);
        alert("success")
        this.router.navigateByUrl("listdet/"+this.router2.snapshot.params.id)
      
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
  logout(){
      
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    this.router.navigateByUrl("login")
    this.uname=""
    this.dataservice2.user(this.name)
    
  }

 

    // var user=this.dataservice2.usercl()
    // // var user=localStorage.getItem('user')
    // if(user){
  //   this.dataservice.crpost(formData,user)?.subscribe(
  //     response=>{
  //       console.log(data);
  //       alert("success")
  //       this.router.navigateByUrl("home")
      
  //   },
    
  //   error=>{
  //    console.log(error);
  //    alert(error.message)
      
  //   }
  // ); }
  // else{
  //   alert("Login Required")
  // }
    

}


