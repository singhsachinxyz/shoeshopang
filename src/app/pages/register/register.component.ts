import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private logins:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    'name':this.fb.control("",Validators.required),
    'email':this.fb.control("",[Validators.required,Validators.pattern("([A-Za-z]).*([@]).*([a-z]).*([\.]).*([a-z])")  ] ),
    'pass':this.fb.control("",[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,20}")  ] ),
    'phone':this.fb.control("",[ Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  })

  register(user:any){
    this.logins.registerUser(user)
    console.log(user)
    this.router.navigate(['login'])
  }

}
