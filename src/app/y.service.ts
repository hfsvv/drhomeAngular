import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YService {
  

  constructor() { }
  user:any
  auser:any
  users(data:any){
    this.user=data
    console.log(this.user);
    // alert(this.user)
    

    
  }
  usercl(){
    
    return this.user
    
  }
  ausers(data:any){
    this.auser=data
    console.log(this.auser);
    
    

    
  }
  ausercl(){
    
    return this.auser
    
  }
}
