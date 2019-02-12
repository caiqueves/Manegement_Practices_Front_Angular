import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PUSH_API } from 'src/app/app.api';
import { Usuario } from '../../model/usuario.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Usuario;
  usuario$: Usuario = null
  navCtrl: any;
  lastUrl: string

  constructor(private http: HttpClient,
    private router: Router) {
  }

  login(email: string, senha: string) {
    return this.http.post(`${PUSH_API}/login`,
      { email: email, senha: senha },
      {
        observe: 'response',
        responseType: 'text'
      })
  }

  sucessoLogin(authorizationValue: string) {
    localStorage.setItem('X-PUSH-AUTH', authorizationValue);
  }

  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  logout() {
    this.user = undefined
    localStorage.removeItem("X-PUSH-AUTH")
    this.router.navigate(['/login'])
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)])
  }

  async selecionarEmailUsuario(email: string): Promise<Usuario> {
    let ret = await this.http.post<Usuario>(`${PUSH_API}/usuario/emailUsuario`, { email: email })
      .toPromise()

    this.user = ret as Usuario
    return ret as Usuario
  }

  
}
