import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private logins:LoginService) { }

  ngOnInit(): void {
    
  }

  loginForm:any=this.fb.group({
    'name':this.fb.control(""),
    'pwd':this.fb.control("")
  })

  loginF(){
    this.logins.checkLogin(this.loginForm.controls.name.value,this.loginForm.controls.pwd.value)
  }

}
