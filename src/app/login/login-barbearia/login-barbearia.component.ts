import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';

@Component({
  selector: 'app-login-barbearia',
  templateUrl: './login-barbearia.component.html',
  styleUrls: ['./login-barbearia.component.css']
})
export class LoginBarbeariaComponent implements OnInit {
  alert: boolean = false;
  enviado: boolean = false;

  constructor(
    private router: Router,
  ) { }

  formBarbearia = new cadastroBarbearia

  esqueceuSenha = false

  ngOnInit(): void {
  }

  logar() {
    let barbeariasCadastradas = new Array<cadastroBarbearia>()
    barbeariasCadastradas = JSON.parse(localStorage.getItem('barbeariasCadastradas')!) ? JSON.parse(localStorage.getItem('barbeariasCadastradas')!) : new Array<cadastroBarbearia>();

    if (barbeariasCadastradas?.find((a: cadastroBarbearia) => a.cnpj == this.formBarbearia.cnpj)?.senha == this.formBarbearia.senha) {

      let logado = barbeariasCadastradas.find((a: cadastroBarbearia) => a.cnpj == this.formBarbearia.cnpj)
      localStorage.removeItem('logado'); localStorage.setItem('logado', JSON.stringify(logado))

      this.router.navigate(["/servicos"]);
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
