import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],

  })
  tokdet :any;

  constructor(private fb:FormBuilder,private dataservice:DataService,private dataservice2:YService,private router:Router,private router2:ActivatedRoute) { }

  ngOnInit(): void {
  }
  login(){
    var username=this.loginForm.value.username;
    var password=this.loginForm.value.password;
    var data={
      "username":username,
      "password":password
    }
    console.log(data);
    
    this.dataservice.login(data).subscribe(
    
      response=>{

        // console.log(accno);
        this.tokdet=response
        console.log(this.tokdet.token);
        
        alert("login Successful")
        console.log(response);
        this.dataservice2.users(username)
        localStorage.setItem("user",username)
        localStorage.setItem("token",("Token "+this.tokdet.token))
        this.router.navigateByUrl("")

      },
      error=>{
       console.log(error);
       alert(error.message)
        
      }
    ); 

  }

}
