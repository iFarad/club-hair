import { Component, OnInit } from '@angular/core';
import { relatorio } from './relatorio.model';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor() { }

  teste = JSON.stringify([{ "avaliacao": 3.3, "atividade": 50, "estabelecimento": "ENERSAVE", "cnpj": 123, "servico": "CORTE/BARBA", "funcionario": "Massey Wilkins", "usuarioCpf": 25108420676, "usuarioNome": "Louise Norman" }, { "avaliacao": 3.5, "atividade": 75, "estabelecimento": "EXOSWITCH", "cnpj": 123, "servico": "CORTE", "funcionario": "Maynard Gonzales", "usuarioCpf": 54349368922, "usuarioNome": "Sasha Guthrie" }, { "avaliacao": 1.3, "atividade": 25, "estabelecimento": "GALLAXIA", "cnpj": 123, "servico": "CORTE/BARBA", "funcionario": "Deanna Mcintosh", "usuarioCpf": 82604896002, "usuarioNome": "Rosalinda Dotson" }, { "avaliacao": 2.8, "atividade": 100, "estabelecimento": "MAGNAFONE", "cnpj": 123, "servico": "BARBA", "funcionario": "Roberta Kelley", "usuarioCpf": 21908920186, "usuarioNome": "Maritza Kramer" }])
  relatorios = new Array<relatorio>()

  ngOnInit(): void {
    this.relatorios = JSON.parse(this.teste)
    console.log('this.relatorios:', this.relatorios)
  }

}


// ## https://json-generator.com/ ##

// '{{repeat(4, 4)}}',
//   {
//     avaliacao: '{{floating(1, 5, "1")}}',
//     atividade: '{{random("25", "50", "75", "100")}}',
//     estabelecimento: '{{company().toUpperCase()}}',
//     cnpj: '{{integer(123, 123)}}',
//     servico: '{{random("corte", "barba", "corte/barba").toUpperCase()}}',
//     funcionario: '{{firstName()}} {{surname()}}',
//     usuarioCpf:'{{integer(10000000000, 99900000000)}}',
//     usuarioNome:'{{firstName()}} {{surname()}}'   
//   }
