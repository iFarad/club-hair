import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { evento } from '../barbearias-usuario/usuario.model';
import { pagamento } from './pagamento.model';

@Component({
  selector: 'pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  alert = false;
  pagamentoFinalizado = false;

  constructor() { }

  @Input() evento = new evento()
  @Output() finalizado = new EventEmitter()

  pagamentosCadastrados = new Array<pagamento>()
  pagamento = new pagamento()

  ngOnInit(): void {
    this.pagamentosCadastrados = JSON.parse(localStorage.getItem('pagamentosCadastrados')!) ? JSON.parse(localStorage.getItem('pagamentosCadastrados')!) : new Array<pagamento>();
  }

  FinalizarPagamento() {
    if (Object.values(this.pagamento).every(x => x === null || x === '')) {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
      return
    }
    this.pagamentosCadastrados.push(this.pagamento)
    localStorage.setItem('pagamentosCadastrados', JSON.stringify(this.pagamentosCadastrados))
    this.pagamentoFinalizado = true
    this.finalizado.emit(this.pagamentoFinalizado)
  }

}
