import { HttpClient } from "@angular/common/http";


import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario.model";
import { PUSH_API } from "src/app/app.api";


@Injectable()
export class RegisterService {
  
  constructor(private http: HttpClient) { }

  listarTipoMetodologia(): Observable<any> {
    return this.http.get(`${PUSH_API}/tipoMetodologia/`)
  }

  salvar(nome: string, email: string, cpfOuCnpj: string, tipofuncao: Number, senha: string, tipoMetodologia: Number[]): Observable<any> {
    return this.http.post(`${PUSH_API}/usuario/`, {
      nome: nome, email: email, cpfOuCnpj: cpfOuCnpj, tipoFuncao: tipofuncao,
      senha: senha, listaTipoMetodologia: tipoMetodologia
    })
  }

 
}
