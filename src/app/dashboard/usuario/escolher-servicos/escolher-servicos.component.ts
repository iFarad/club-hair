import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import { servico } from '../../barbearia/servicos/servico.model';

@Component({
  selector: 'escolher-servicos',
  templateUrl: './escolher-servicos.component.html',
  styleUrls: ['./escolher-servicos.component.css']
})
export class EscolherServicosComponent implements OnInit {

  constructor() { }

  @Input() barbearia = new cadastroBarbearia()
  @Output() servico = new EventEmitter();

  servicos = new Array<servico>()

  ngOnInit(): void { }

  ngOnChanges() {
    this.servicos = JSON.parse(localStorage.getItem('servicosCadastrados')!) ? JSON.parse(localStorage.getItem('servicosCadastrados')!) : new Array<servico>();
    this.servicos = this.servicos.filter(a => a.cnpj == this.barbearia.cnpj).sort((a, b) => a.id - b.id)
  }

  escolherServico(servico: servico) {
    this.servico.emit(servico)
  }


}
