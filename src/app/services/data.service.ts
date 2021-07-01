import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  

  constructor(private http:HttpClient,private router:Router) { }
  users(tok:any){
    let httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':tok
    })
    httpHeaders.set('token',tok)
    console.log(httpHeaders);
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/users',{headers:httpHeaders})
  }
  login(data:any) {
    
    return this.http.post('https://drhomes.herokuapp.com/api/v1/prop/login',data)
  }
  loginadmin(data:any){
    return this.http.post('https://drhomes.herokuapp.com/api/v1/prop/loginadmin',data)
  }
  register(data:any) {


    return this.http.post('https://drhomes.herokuapp.com/api/v1/prop/register',data)
  }
  getlist(){
  
    
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/home')
  }
  agetlist(tok:any){
  
    let httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':tok
    })
    httpHeaders.set('token',tok)
    console.log(httpHeaders);  
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/ahome',{headers:httpHeaders})
  }
  crpost(data:any,user:any,tok:any){
    
    let httpHeaders=new HttpHeaders({
      'Authorization':tok
    })
    let options={headers:httpHeaders}
    // console.log(httpHeaders);
    
    return this.http.post('https://drhomes.herokuapp.com/api/v1/prop/post/'+user,data,options)
  
 
  
  }
  adetails(id:any,tok:any){
    let httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':tok
    })
    httpHeaders.set('token',tok)
    console.log(httpHeaders);
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/postedi/'+id+'/',{headers:httpHeaders})
  }
  details(id:any){
    // let httpHeaders=new HttpHeaders({
    //   'content-type':'application/json',
    //   'Authorization':tok
    // })
    // httpHeaders.set('token',tok)
    // console.log(httpHeaders);
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/apostedi/'+id+'/')
  }

  mylistings(user:any,tok:any){
    // if(this.tok){
      let httpHeaders=new HttpHeaders({
        'content-type':'application/json',
        'Authorization':tok
      })
      httpHeaders.set('token',tok)
      console.log(httpHeaders);
      
    return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/post/'+user,{headers:httpHeaders})
  
  // else{
  //   alert("Login Required")
  //   this.router.navigateByUrl("login")
  // }
}
  edit(id:any,data:any,tok:any){
    let httpHeaders=new HttpHeaders({
      'Authorization':tok
    })
    
    httpHeaders.set('token',tok)
    console.log(httpHeaders);

    return this.http.put('https://drhomes.herokuapp.com/api/v1/prop/postedi/'+id+'/',data,{headers:httpHeaders})
  }
 dltuser(uname:any,tok:any) {
  let httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization':tok
  })
  httpHeaders.set('token',tok)
  console.log(httpHeaders);
  return this.http.delete('https://drhomes.herokuapp.com/api/v1/prop/userdel/'+uname,{headers:httpHeaders})
 }
 filtercity(city:any){
  return this.http.get('https://drhomes.herokuapp.com/api/v1/prop/postcity/'+city)
 }
 adlt(id:any,tok:any){
  let httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization':tok
  })
  httpHeaders.set('token',tok)
  console.log(httpHeaders);
  return this.http.delete('https://drhomes.herokuapp.com/api/v1/prop/propdel/'+id,{headers:httpHeaders})
}
  dlt(id:any,tok:any){
    let httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':tok
    })
    httpHeaders.set('token',tok)
    console.log(httpHeaders);
    return this.http.delete('https://drhomes.herokuapp.com/api/v1/prop/postedi/'+id+'/',{headers:httpHeaders})
  }

}
