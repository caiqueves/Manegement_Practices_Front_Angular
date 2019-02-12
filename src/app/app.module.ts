import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './header/header.component';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { InputComponent } from './shared/input/input.component';
import { SenhaEsqueciComponent } from './components/senha-esqueci/senha-esqueci.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { ConfiguracaoNotificacaoComponent } from './components/configuracao-notificacao/configuracao-notificacao.component';
import { ConfiguracaoPraticaComponent } from './components/configuracao-pratica/configuracao-pratica.component';
import { ConfiguracaoTipoMetodologiaComponent } from './components/configuracao-tipo-metodologia/configuracao-tipo-metodologia.component';
import { RegisterService } from './components/register/register.service';
import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';
import { WaitService } from './shared/messages/wait.service';
import { SenhaEsqueciService } from './components/senha-esqueci/senha-esqueci.service';
import { AuthInterceptor } from './security/login/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.router';
import { LoggedInGuard } from './security/login/loggedin.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    HeaderComponent,
    SnackbarComponent,
    InputComponent,
    SenhaEsqueciComponent,
    PerfilUsuarioComponent,
    UserDetailComponent,
    ConfiguracaoNotificacaoComponent,
    ConfiguracaoPraticaComponent,
    ConfiguracaoTipoMetodologiaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
  ],
  providers: [RegisterService,
              LoginService,
              NotificationService,
              WaitService,
              RegisterService,
              SenhaEsqueciService,
              LoggedInGuard,
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ],
           
  bootstrap: [AppComponent]
})
export class AppModule { }
