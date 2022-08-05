import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import { servico } from '../servico.model';

@Component({
  selector: 'editar-servico',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  alert: boolean = false;

  constructor() { }

  @Input() logado?: cadastroBarbearia
  @Input() servico = new servico();

  @Output() editar = new EventEmitter();
  @Output() cancelar = new EventEmitter();

  funcionario = ''

  servicosCadastrados = new Array<servico>()

  ngOnInit(): void {
    this.servicosCadastrados = JSON.parse(localStorage.getItem('servicosCadastrados')!) ? JSON.parse(localStorage.getItem('servicosCadastrados')!) : new Array<cadastroBarbearia>();
    this.servicosCadastrados = this.servicosCadastrados.filter(a => { return a.id != this.servico.id })
  }

  adicionarFuncionario() {
    if (this.funcionario == '') return
    if (!this.servico.funcionarios?.length) this.servico.funcionarios = new Array<string>()
    this.servico.funcionarios.push(this.funcionario)
    localStorage.setItem('servicosCadastrados', JSON.stringify(this.servicosCadastrados))
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
    this.servicosCadastrados.push(this.servico)
    console.log('servicosCadastradas:', this.servicosCadastrados)
    localStorage.setItem('servicosCadastrados', JSON.stringify(this.servicosCadastrados))
    this.editar.emit();
  }

}
