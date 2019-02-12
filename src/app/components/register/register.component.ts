import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { NotificationService } from '../../shared/messages/notification.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { Usuario, TipoMetodologia } from '../../model/usuario.model';
import { TipoFuncao } from '../../model/TipoFuncao.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tipometodologia: TipoMetodologia[];
  tipofuncao = [
    new TipoFuncao(1, 'GERENTE'),
    new TipoFuncao(2, 'ANALISTA')
  ];



  novoForm: FormGroup;
  selecionado: string = "";

  constructor(private service: RegisterService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {

    this.novoForm = this.fb.group(
      {
        name: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        cpfOuCnpj: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]),
        funcao: this.fb.control('', [Validators.required, Validators.minLength(1)]),
        senha: this.fb.control('', [Validators.required, Validators.minLength(6)]),
        metodologia: this.fb.control('', [Validators.required, Validators.minLength(1)]),
      }
    );

    this.service.listarTipoMetodologia()
      .subscribe(
        tipometodologia => {
          this.tipometodologia = tipometodologia
        },
        erro => {
          this.notificationService.notify('Erro:' + 'Não foi possivel carregar os tipos de Metodologia, contate o suporte !')
        })
  }


  cadastrar() {
    if (this.novoForm.valid) {
      this.service.salvar(this.novoForm.value.name, this.novoForm.value.email, this.novoForm.value.cpfOuCnpj, Number(this.novoForm.value.funcao), this.novoForm.value.senha,
        this.novoForm.value.metodologia)
        .subscribe(
          retorno => {
            this.notificationService.notify(retorno.message)
            this.router.navigate(['/login'])
          },
          erro => {
            this.notificationService.notify('Erro:' + erro.error.message)
          })
    }
  }

  public selecionar_servico(value: any) {
    this.selecionado = value
  }
}
