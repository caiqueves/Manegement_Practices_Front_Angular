import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../model/usuario.model';
import { LoginService } from 'src/app/security/login/login.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): Usuario {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login(){
    this.loginService.handleLogin()
  }

  logout(){
    this.loginService.logout()
  }
}
