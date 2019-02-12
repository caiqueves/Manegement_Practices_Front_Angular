import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  
  title: string = "Perfil Usuário";
  subtitle: string = "página de configurações especifica pelo usuário";

  constructor() { }

  ngOnInit() {
  }

}
