import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBarbeariaComponent } from './cadastro/cadastro-barbearia/cadastro-barbearia.component';
import { CadastroUsuarioComponent } from './cadastro/cadastro-usuario/cadastro-usuario.component';
import { AgendaComponent } from './dashboard/barbearia/agenda/agenda.component';
import { ExtratoComponent } from './dashboard/barbearia/extrato/extrato.component';
import { RelatorioComponent } from './dashboard/barbearia/relatorio/relatorio.component';
import { ServicosComponent } from './dashboard/barbearia/servicos/servicos.component';
import { BarbeariasUsuarioComponent } from './dashboard/usuario/barbearias-usuario/barbearias-usuario.component';
import { HomeComponent } from './dashboard/usuario/home/home.component';
import { LoginBarbeariaComponent } from './login/login-barbearia/login-barbearia.component';
import { LoginUsuarioComponent } from './login/login-usuario/login-usuario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "login-usuario",
    component: LoginUsuarioComponent
  },
  {
    path: "login-barbeiro",
    component: LoginBarbeariaComponent
  },
  {
    path: "cadastro-usuario",
    component: CadastroUsuarioComponent
  },
  {
    path: "cadastro-barbeiro",
    component: CadastroBarbeariaComponent
  },
  {
    path: "servicos",
    component: ServicosComponent

  },
  {
    path: "agenda",
    component: AgendaComponent
  },
  {
    path: "extratos",
    component: ExtratoComponent
  },
  {
    path: "relatorios",
    component: RelatorioComponent
  },
  {
    path: "home-usuario",
    component: HomeComponent
  },
  {
    path: "barbearias",
    component: BarbeariasUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
