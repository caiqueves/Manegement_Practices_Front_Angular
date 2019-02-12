import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/messages/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario } from '../../model/usuario.model';
import { Error } from '../../model/error.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  email: String
  error: Error;
  
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.fb.group(
      {
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      }
    )
  }

  login() {
    if (this.loginForm.valid) {

      localStorage.setItem('Email', this.loginForm.value.email);

      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(response => {
          this.loginService.sucessoLogin(response.headers.get('Authorization'))
          this.loginService.selecionarEmailUsuario(localStorage.getItem('Email'))
          this.router.navigate(['/'])
        },
          erro => {
            this.error = erro;

            if (erro.status = 401) {
              this.notificationService.notify('Erro:' + this.error.error.substr(83, 24));
            }
          })
    }
  }
}
