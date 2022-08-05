import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroUsuario } from 'src/app/cadastro/cadastro-usuario/cadastro-usuario.model';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  alert: boolean = false;
  enviado: boolean = false;

  constructor(
    private router: Router,
  ) { }

  formUsuario = new cadastroUsuario

  esqueceuSenha = false

  ngOnInit(): void {
  }

  logar() {
    let usuariosCadastrados = new Array<cadastroUsuario>()
    usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')!) ? JSON.parse(localStorage.getItem('usuariosCadastrados')!) : new Array<cadastroUsuario>();

    if (usuariosCadastrados?.find((a: cadastroUsuario) => a.cpf == this.formUsuario.cpf)?.senha == this.formUsuario.senha) {

      let logado = usuariosCadastrados.find((a: cadastroUsuario) => a.cpf == this.formUsuario.cpf)
      localStorage.removeItem('logado'); localStorage.setItem('logado', JSON.stringify(logado))

      this.router.navigate(["/home-usuario"]);
    }
    else {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
    }
  }

  recuperarSenha() {
    this.esqueceuSenha = true
    this.enviado = false
  }

}
