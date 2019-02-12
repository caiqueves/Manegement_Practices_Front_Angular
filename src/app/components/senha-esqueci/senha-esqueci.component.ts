import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/messages/notification.service';
import { SenhaEsqueciService } from './senha-esqueci.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senha-esqueci',
  templateUrl: './senha-esqueci.component.html',
  styleUrls: ['./senha-esqueci.component.css']
})
export class SenhaEsqueciComponent implements OnInit {
  
  EsqueciSenhaForm: FormGroup;
  
  constructor( private senha: SenhaEsqueciService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {

    this.EsqueciSenhaForm = this.fb.group(
      {
        email: this.fb.control('', [Validators.required,Validators.email]),
      }
    );
  }

  recuperarSenha () 
  {
    if (this.EsqueciSenhaForm.valid) 
    { 
      this.senha.enviarNovaSenha(this.EsqueciSenhaForm.value.email)
      .subscribe(response => 
      { 
        this.notificationService.notify (response.message)
        this.router.navigate(['/login'])
      },
      erro => {
        this.notificationService.notify('Erro:' + erro.error.message)
      }); 
    }
  }
}
