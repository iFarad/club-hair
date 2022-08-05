import { Component, OnInit } from '@angular/core';
import { extrato } from './extrato.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  constructor() { }

  teste = JSON.stringify([{ "usuarioNome": "Britt Salazar", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 30 }, { "usuarioNome": "Glover Hansen", "barbeariaCnpj": "123", "servico": "CORTE", "valor": 50 }, { "usuarioNome": "Corina Sherman", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 50 }, { "usuarioNome": "Brianna Santiago", "barbeariaCnpj": "123", "servico": "CORTE", "valor": 50 }, { "usuarioNome": "Valencia Tanner", "barbeariaCnpj": "123", "servico": "CORTE", "valor": 20 }, { "usuarioNome": "Stanton Heath", "barbeariaCnpj": "123", "servico": "CORTE", "valor": 50 }, { "usuarioNome": "Miranda Whitney", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 20 }, { "usuarioNome": "Eileen Reilly", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 50 }, { "usuarioNome": "Wilkerson Tyler", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 30 }, { "usuarioNome": "Cobb Gardner", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 30 }, { "usuarioNome": "Ester Wade", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 30 }, { "usuarioNome": "Brennan Dejesus", "barbeariaCnpj": "123", "servico": "BARBA", "valor": 30 }])
  extratos = new Array<extrato>()

  extratoSelecionado = new extrato();
  extratoDetalhes = false


  ngOnInit(): void {
    this.extratos = JSON.parse(this.teste)
    console.log('extratos:', this.extratos)
  }

  mostrarExtrato(extrato: extrato) {
    this.extratoDetalhes = true
    this.extratoSelecionado = extrato
  }

}
