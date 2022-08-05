import { Component, OnInit } from '@angular/core';
import { agendamento } from './agenda.model';

import * as moment from 'moment';
moment.locale('pt-br')

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  agendamentos = new Array<agendamento>();
  agendamentosVisualzados = new Array<agendamento>();
  meses = new Array<any>()
  dias = new Array<any>()
  mes = ''
  dia = ''

  ngOnInit(): void {
    let teste = JSON.stringify([{ "data": "2022-01-13", "horario": "05:13:12", "estabelecimento": "OZEAN", "servico": "BARBA", "funcionario": "Brittany Cantrell", "usuarioCpf": 37337076724, "usuarioNome": "Erika Mccarthy" }, { "data": "2022-11-28", "horario": "03:04:21", "estabelecimento": "TECHMANIA", "servico": "CORTE", "funcionario": "Ivy Harvey", "usuarioCpf": 58788001190, "usuarioNome": "Hull Vaughan" }, { "data": "2022-04-09", "horario": "06:20:24", "estabelecimento": "AQUAFIRE", "servico": "CORTE/BARBA", "funcionario": "Millicent Jones", "usuarioCpf": 25105896403, "usuarioNome": "Angela Stephenson" }, { "data": "2022-10-04", "horario": "07:40:16", "estabelecimento": "CORECOM", "servico": "CORTE", "funcionario": "Patrice Hays", "usuarioCpf": 74276935491, "usuarioNome": "Ayala Hernandez" }, { "data": "2022-03-16", "horario": "06:18:29", "estabelecimento": "UPLINX", "servico": "CORTE/BARBA", "funcionario": "Osborne Oneil", "usuarioCpf": 70828479139, "usuarioNome": "Hutchinson Gomez" }, { "data": "2022-01-10", "horario": "05:35:52", "estabelecimento": "VISUALIX", "servico": "BARBA", "funcionario": "Weiss Burns", "usuarioCpf": 29531647812, "usuarioNome": "Susan Travis" }, { "data": "2022-12-17", "horario": "04:33:23", "estabelecimento": "GEEKUS", "servico": "CORTE", "funcionario": "William Bradford", "usuarioCpf": 90581965010, "usuarioNome": "Stacy Cooke" }])
    this.agendamentos = JSON.parse(teste)

    this.getDatas()
  }

  getDatas() {
    this.agendamentos.forEach(a => {
      if (moment().isBefore(a.data)) {
        this.meses.push({ id: moment(a.data).format("MM"), nome: moment(a.data).format("MMMM") })
      }
    })
    this.meses = this.meses.sort((a, b) => a.id - b.id)
    this.dias = this.dias.sort((a, b) => a.id - b.id)
  }

  alterarFiltro() {
    if (this.mes == '') this.dia = ''
    this.dias = []
    this.agendamentos.forEach(a => {
      if (moment().isBefore(a.data) && moment(a.data).format("MM") == this.mes) {
        this.dias.push({ id: moment(a.data).format("DD"), nome: moment(a.data).format("DD") })
      }
    })
    this.agendamentosVisualzados = this.agendamentos.filter(a => moment(a.data).format("MM") == this.mes && moment(a.data).format("DD") == this.dia)

  }

}
