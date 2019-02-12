import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './security/login/login.component';
import { SenhaEsqueciComponent } from './components/senha-esqueci/senha-esqueci.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ConfiguracaoNotificacaoComponent } from './components/configuracao-notificacao/configuracao-notificacao.component';
import { ConfiguracaoPraticaComponent } from './components/configuracao-pratica/configuracao-pratica.component';
import { ConfiguracaoTipoMetodologiaComponent } from './components/configuracao-tipo-metodologia/configuracao-tipo-metodologia.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoggedInGuard } from './security/login/loggedin.guard';

 export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] }, 
  {path: 'register', component: RegisterComponent},
  {path: 'senhaEsqueci', component: SenhaEsqueciComponent},
  {path: 'login/:to', component: LoginComponent },
  {path: 'login', component: LoginComponent},
  {path: 'perfilUsuario', component: PerfilUsuarioComponent},
  {path: 'ConfiguracaoNotificacao', component: ConfiguracaoNotificacaoComponent},
  {path: 'ConfiguracaoPratica', component: ConfiguracaoPraticaComponent},
  {path: 'ConfiguracaoTipoMetodologia', component: ConfiguracaoTipoMetodologiaComponent},
  {path: '**', component: NotFoundComponent }
];
