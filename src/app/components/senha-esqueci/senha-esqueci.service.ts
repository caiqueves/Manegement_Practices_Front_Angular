import { HttpClient } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PUSH_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})

export class SenhaEsqueciService {

  constructor(private http: HttpClient) { }

  enviarNovaSenha(email: string): Observable<any> {
    return this.http.post(`${PUSH_API}/autenticacao/esqueciSenha`, { email: email })
  }
}
