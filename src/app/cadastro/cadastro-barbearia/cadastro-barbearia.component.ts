import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cadastroBarbearia } from './cadastro-barbearia.model';

@Component({
  selector: 'app-cadastro-barbearia',
  templateUrl: './cadastro-barbearia.component.html',
  styleUrls: ['./cadastro-barbearia.component.css']
})
export class CadastroBarbeariaComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  barbearia = new cadastroBarbearia();

  barbeariasCadastradas = new Array<cadastroBarbearia>();

  senhaConfirmacao: string = '';

  alert = false

  ngOnInit(): void {
  }

  cadastrar() {
    if (Object.values(this.barbearia).every(x => x === null || x === '')) {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
      return
    }
    this.barbeariasCadastradas = JSON.parse(localStorage.getItem('barbeariasCadastradas')!) ? JSON.parse(localStorage.getItem('barbeariasCadastradas')!) : new Array<cadastroBarbearia>();
    this.barbeariasCadastradas.push(this.barbearia)
    this.barbearia.horarioAbertura = this.barbearia.horarioAbertura.slice(0, 2) + ":" + this.barbearia.horarioAbertura.slice(2, 4);
    this.barbearia.horarioFechamento = this.barbearia.horarioFechamento.slice(0, 2) + ":" + this.barbearia.horarioFechamento.slice(2, 4);
    console.log('barbeariasCadastradas:', this.barbeariasCadastradas)
    localStorage.setItem('barbeariasCadastradas', JSON.stringify(this.barbeariasCadastradas))
    this.router.navigate(['/servicos']);
  }

}
