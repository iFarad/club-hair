import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { funcionario, horario } from '../../barbearia/servicos/servico.model';
import { evento } from '../barbearias-usuario/usuario.model';

@Component({
  selector: 'escolher-data',
  templateUrl: './escolher-data.component.html',
  styleUrls: ['./escolher-data.component.css']
})
export class EscolherDataComponent implements OnInit {

  @Input() funcionario = '';
  @Output() agendamento = new EventEmitter();
  @Output() voltar = new EventEmitter();

  tabelaDatas = new Array<agenda[]>();
  eventosFuncionario = new Array<evento>();

  horariosIndisponiveis = new Array<string>();

  horarios = new Array<any>()
  horarioSelecionado = '';

  constructor() { }

  diasAgenda = new Array<agenda>();
  mes = moment().format('MMMM yyyy')

  diaSelecionado = ''



  outputData = {
    data: '',
    hora: ''
  }


  horariosDisponiveis = false

  ngOnInit(): void {
    this.getEventos()
    this.carregarDatas()
  }

  getEventos() {
    this.eventosFuncionario = JSON.parse(localStorage.getItem('eventosCadastrados')!)
    this.eventosFuncionario = this.eventosFuncionario.filter(a => a.funcionario == this.funcionario)

  }

  carregarDatas() {
    var date = moment().format('yyyy-MM-01');
    let diasAgenda = new Array<agenda>()
    while (moment(date).format('MM') === moment().format('MM')) {
      diasAgenda.push({ diaSemanaNome: moment(date).format('dddd'), diaSemanaNumero: moment(date).isoWeekday(), diaNumero: parseInt(moment(date).format('DD')), horarios: [] });
      date = moment(date).add(1, 'days').format('yyyy-MM-DD')
    }
    if (diasAgenda[0].diaSemanaNumero != 1) {
      for (let i = diasAgenda[0].diaSemanaNumero; i > 1; i--) {
        diasAgenda.unshift(new agenda())
      }
    }
    if (diasAgenda.length < 42) {
      for (let i = diasAgenda.length; i < 42; i++) {
        diasAgenda.push(new agenda())
      }
    }
    let tds = new Array<agenda>()
    diasAgenda.forEach((a, i) => {
      tds.push(a)
      if ((i + 1) % 7 == 0) { this.tabelaDatas.push(tds); tds = new Array<agenda>() }
    })

    this.horarios = new Array<horario>()
    new Array(24).fill(24).forEach((a, i) => {
      this.horarios.push({ hora: moment({ hour: i }).format('HH:mm'), disponibilidade: true });
      this.horarios.push({ hora: moment({ hour: i, minute: 30 }).format('HH:mm'), disponibilidade: true });
    })

    this.horarios = this.horarios.slice(20, 44)
    this.checarDisponibilidade(1)
  }

  checarDisponibilidade(dia: any) {
    dia = this.diaSelecionado = dia.diaNumero < 10 ? moment().format('yyyy-MM-') + '0' + dia.diaNumero : moment().format('yyyy-MM-') + dia.diaNumero
    let disp = this.eventosFuncionario.filter(a => moment(a.data).format('yyyy-MM-DD') == dia).map(a => a.horario)
    return disp?.length < this.horarios.length
  }

  abrirDia(dia: any) {
    this.outputData.data = this.diaSelecionado = dia.diaNumero < 10 ? moment().format('yyyy-MM-') + '0' + dia.diaNumero : moment().format('yyyy-MM-') + dia.diaNumero
    this.horariosDisponiveis = true
    this.horariosIndisponiveis = this.eventosFuncionario.filter(a => moment(a.data).format('yyyy-MM-DD') == this.diaSelecionado).map(a => a.horario)
    console.log('this.horariosIndisponiveis:', this.horariosIndisponiveis)
  }

  selecionarHorario(horario: string) {
    this.outputData.hora = this.horarioSelecionado = horario
  }

  agendar() {
    this.horariosDisponiveis = false
    this.agendamento.emit(this.outputData)
  }
}

export class agenda {
  diaSemanaNome!: string;
  diaSemanaNumero!: number;
  diaNumero!: number;
  horarios!: Array<horario>
}


