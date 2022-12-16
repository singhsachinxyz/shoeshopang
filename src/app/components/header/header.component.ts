import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api: ApiService, private logins: LoginService) { }
  no:any=0
  button:any={'login':true,'logout':false}

  ngOnInit(): void {
    this.no=this.api.Count
    this.button=this.logins.button
  }
  logout(){
    this.logins.logout()
  }

}