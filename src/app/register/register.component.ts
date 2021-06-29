import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Key } from 'selenium-webdriver';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectimage="";
  selectimage2=""
  regForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
    first_name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    mobno:['',[Validators.required]],
    email:['',[Validators.required]],
    dob:['',[Validators.required]],
    place:['',[Validators.required]],
    prof_pic:['',[Validators.required]],
   


  })
  fileup(event:any){
    if(event.target.files.length>0){
      this.selectimage=event.target.files[0];
      // this.regForm.get('prof_pic').setValue(this.selectimage)
      this.selectimage2=event.target.files[0].name;
      

    }
  }


  constructor(private fb:FormBuilder,private dataservice:DataService,private router:Router,private router2:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  register(){
    var username=this.regForm.value.username
    var password=this.regForm.value.password
    var first_name=this.regForm.value.first_name
    var last_name=this.regForm.value.last_name
    var mobno=this.regForm.value.mobno
    var email=this.regForm.value.email
    var dob=this.regForm.value.dob
    var place=this.regForm.value.place
    let formData:FormData=new FormData
    var data:any={
      "username":username,
      "first_name":first_name,
      "last_name":last_name,
      "password":password,
      "email":email,
      "mobno":mobno,
      "dob":dob,
      "place":place,

      
    }
    if(this.selectimage){
    formData.append("prof_pic",this.selectimage ,this.selectimage2)
  }
  for (let key in data){
    formData.append(key,data[key])
  }
  console.log(formData);
  
    this.dataservice.register(formData).subscribe(
      
      response=>{
        console.log(data);
        alert("success")
        this.router.navigateByUrl("")
      
    },
    
    error=>{
     console.log(error);
     alert(error.message)
      
    }
  ); 

}


    
    
  }

