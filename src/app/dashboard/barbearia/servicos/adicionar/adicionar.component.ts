import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import { funcionario, horario, servico } from '../servico.model';

@Component({
  selector: 'adicionar-servico',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  alert: boolean = false;
  funcionariosCadastrados = new Array<funcionario>();

  constructor() { }

  @Input() logado?: cadastroBarbearia
  @Output() adicionar = new EventEmitter();
  @Output() cancelar = new EventEmitter();


  servico = new servico();

  servicosCadastrados = new Array<servico>()

  funcionario: string = ''

  ngOnInit(): void {
  }

  adicionarFuncionario() {
    if (this.funcionario == '') return
    if (!this.servico.funcionarios?.length) this.servico.funcionarios = new Array<string>()
    this.servico.funcionarios.push(this.funcionario)
    this.funcionario = ''
  }

  salvar() {
    if (Object.values(this.servico).every(x => x === null || x === '')) {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
      return
    }
    this.salvarFuncionarios()
    this.servicosCadastrados = JSON.parse(localStorage.getItem('servicosCadastrados')!) ? JSON.parse(localStorage.getItem('servicosCadastrados')!) : new Array<cadastroBarbearia>();
    this.servico.id = (this.servicosCadastrados?.sort((a, b) => a.id - b.id).slice(-1)[0]?.id || 0) + 1
    this.servico.cnpj = this.logado?.cnpj!
    this.servicosCadastrados.push(this.servico)
    console.log('servicosCadastradas:', this.servicosCadastrados)
    localStorage.setItem('servicosCadastrados', JSON.stringify(this.servicosCadastrados))
    this.adicionar.emit();
  }

  salvarFuncionarios() {
    this.funcionariosCadastrados = JSON.parse(localStorage.getItem('funcionariosCadastrados')!) ? JSON.parse(localStorage.getItem('funcionariosCadastrados')!) : new Array<funcionario>();
    let horarios = new Array<horario>()
    new Array(24).fill(24).forEach((a, i) => {
      horarios.push({ hora: moment({ hour: i }).format('HH:mm'), disponibilidade: true });
      horarios.push({ hora: moment({ hour: i, minute: 30 }).format('HH:mm'), disponibilidade: true });
    })
    this.servico.funcionarios.forEach(a => {
      let novoFuncionario = { cnpj: this.logado?.cnpj!, nome: a, horarios: horarios }
      this.funcionariosCadastrados.push(novoFuncionario)
    })
    localStorage.setItem('funcionariosCadastrados', JSON.stringify(this.funcionariosCadastrados))
  }

}
