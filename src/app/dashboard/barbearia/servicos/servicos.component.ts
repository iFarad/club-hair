import { Component, OnInit } from '@angular/core';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import { servico } from './servico.model';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  constructor() { }

  servico = new servico();
  servicos = new Array<servico>()

  logado = new cadastroBarbearia();

  editando = false

  adicionando = false

  ngOnInit(): void {
    this.getLogado();
    this.getServicos();
  }
  getServicos() {
    this.servicos = JSON.parse(localStorage.getItem('servicosCadastrados')!) ? JSON.parse(localStorage.getItem('servicosCadastrados')!) : new Array<servico>();
    this.servicos = this.servicos.filter(a => a.cnpj == this.logado.cnpj).sort((a, b) => a.id - b.id)
    this.cancelar()
  }

  getLogado() {
    this.logado = JSON.parse(localStorage.getItem('logado')!)
  }

  adicionar() {
    this.cancelar();
    this.adicionando = true
  }

  editar(servico: servico) {
    this.cancelar();
    this.servico = servico;
    this.editando = true
  }

  cancelar() {
    this.adicionando = false
    this.editando = false
  }

}
