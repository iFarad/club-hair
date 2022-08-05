import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro/cadastro-usuario/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './login/login-usuario/login-usuario.component';
import { CadastroBarbeariaComponent } from './cadastro/cadastro-barbearia/cadastro-barbearia.component';
import { ServicosComponent } from './dashboard/barbearia/servicos/servicos.component';
import { LoginBarbeariaComponent } from './login/login-barbearia/login-barbearia.component';
import { AdicionarComponent } from './dashboard/barbearia/servicos/adicionar/adicionar.component';
import { EditarComponent } from './dashboard/barbearia/servicos/editar/editar.component';
import { AgendaComponent } from './dashboard/barbearia/agenda/agenda.component';
import { ExtratoComponent } from './dashboard/barbearia/extrato/extrato.component';
import { RelatorioComponent } from './dashboard/barbearia/relatorio/relatorio.component';
import { HomeComponent } from './dashboard/usuario/home/home.component';
import { BarbeariasUsuarioComponent } from './dashboard/usuario/barbearias-usuario/barbearias-usuario.component';
import { EscolherServicosComponent } from './dashboard/usuario/escolher-servicos/escolher-servicos.component';
import { EscolherFuncionarioComponent } from './dashboard/usuario/escolher-funcionario/escolher-funcionario.component';
import { EscolherDataComponent } from './dashboard/usuario/escolher-data/escolher-data.component';
import { PagamentoComponent } from './dashboard/usuario/pagamento/pagamento.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null as any;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    LoginUsuarioComponent,
    CadastroBarbeariaComponent,
    ServicosComponent,
    LoginBarbeariaComponent,
    AdicionarComponent,
    EditarComponent,
    AgendaComponent,
    ExtratoComponent,
    RelatorioComponent,
    HomeComponent,
    BarbeariasUsuarioComponent,
    EscolherServicosComponent,
    EscolherFuncionarioComponent,
    EscolherDataComponent,
    PagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
