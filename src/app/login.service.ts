import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  loginauth=false
  Users:any=[{ "name": "", "email": "admin", "pass": "admin", "phone": "" }]
  button:any=[{'login':true,'logout':false}]


  getLoginauth(){
    if(this.loginauth==true){
      return true
    }
    else{
      this.router.navigate(['login'])
      return false
    }
  }

  registerUser(user:any){
    this.Users.push(user)
  }

  checkLogin(name:any,pass:any){
    this.Users.forEach((user: any) => {
      if(user.email==name && user.pass==pass){
        this.loginauth=true
        this.router.navigate(['shop'])
        this.button.pop()
        this.button.push({'login':false,'logout':true})

      }
    });
    if(this.loginauth==false){
      alert('Login Failed! Try Again.')
    }
  }
  logout(){
    this.button.pop()
    this.button.push({'login':true,'logout':false})
    this.loginauth=false
  }

}
