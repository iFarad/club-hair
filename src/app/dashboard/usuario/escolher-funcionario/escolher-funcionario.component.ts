import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import { servico } from '../../barbearia/servicos/servico.model';

@Component({
  selector: 'escolher-funcionario',
  templateUrl: './escolher-funcionario.component.html',
  styleUrls: ['./escolher-funcionario.component.css']
})
export class EscolherFuncionarioComponent implements OnInit {

  constructor() { }

  @Input() servico = new servico();
  @Output() funcionario = new EventEmitter();


  ngOnInit(): void { }

  ngOnChanges() { console.log('servico:', this.servico) }

  escolherFuncionario(servico: servico) {
    this.funcionario.emit(servico)
  }
}
