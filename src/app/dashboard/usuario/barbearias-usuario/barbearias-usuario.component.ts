import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { cadastroBarbearia } from 'src/app/cadastro/cadastro-barbearia/cadastro-barbearia.model';
import structuredclone from '@ungap/structured-clone'
import { funcionario, horario, servico } from '../../barbearia/servicos/servico.model';
import { evento } from './usuario.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barbearias-usuario',
  templateUrl: './barbearias-usuario.component.html',
  styleUrls: ['./barbearias-usuario.component.css']
})
export class BarbeariasUsuarioComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  evento = new evento()
  eventosCadastrados = new Array<evento>()

  subject = new Subject();
  subjectServico = new Subject();
  subjectFuncionario = new Subject();
  subjectAgendamento = new Subject();
  barbeariasCadastradas = new Array<cadastroBarbearia>();

  barbeariasTela = new Array<cadastroBarbearia>();

  barbeariaSelecionada = new cadastroBarbearia();
  servicoSelecionado = new servico()

  funcionarioSelecionado = ''

  escolhendoData = false
  escolhendoFuncionario = false;
  escolhendoServico = false;
  escolhendoBarbearia = true;
  pagando = false;
  pagamentoFinalizado = false;

  ngOnInit(): void {

    this.eventosCadastrados = JSON.parse(localStorage.getItem('eventosCadastrados')!) ? JSON.parse(localStorage.getItem('eventosCadastrados')!) : new Array<evento>()

    this.gerarFuncionarios()

    let teste = JSON.stringify([{ "cnpj": 65573155639703, "razaoSocial": "Cantu Rosa", "nome": "Rivera Hall", "telefone": "(962) 556-3378", "cep": 910727374, "cidade": "Kersey", "endereco": "Perry Place", "numero": 2117, "email": "mcleanwarner@roughies.com", "bairro": "Clayton", "senha": 73403259956064, "horarioAbertura": 11, "horarioFechamento": 20, "avaliacao": 1.9 }, { "cnpj": 44007564530881, "razaoSocial": "Mamie Johns", "nome": "Leticia Landry", "telefone": "(871) 511-2322", "cep": 910857853, "cidade": "Layhill", "endereco": "Forbell Street", "numero": 5794, "email": "hicksbyrd@tripsch.com", "bairro": "Emerson", "senha": 63828026936489, "horarioAbertura": 11, "horarioFechamento": 21, "avaliacao": 2.2 }, { "cnpj": 52301704428272, "razaoSocial": "Austin Castro", "nome": "Marsha Jacobson", "telefone": "(845) 402-2064", "cep": 997097074, "cidade": "Urie", "endereco": "Sullivan Place", "numero": 1829, "email": "buchananglover@inear.com", "bairro": "Workman", "senha": 44851943885457, "horarioAbertura": 12, "horarioFechamento": 22, "avaliacao": 1.8 }, { "cnpj": 81510760942621, "razaoSocial": "Lowery Hawkins", "nome": "Hampton Harrison", "telefone": "(861) 567-2228", "cep": 969142704, "cidade": "Cuylerville", "endereco": "Linden Street", "numero": 8592, "email": "mcdanieljones@endipin.com", "bairro": "Wilkins", "senha": 15444792208408, "horarioAbertura": 7, "horarioFechamento": 21, "avaliacao": 1.2 }, { "cnpj": 58170105221953, "razaoSocial": "Nina Bright", "nome": "Mcclain Bowman", "telefone": "(849) 464-2331", "cep": 950248181, "cidade": "Mansfield", "endereco": "President Street", "numero": 5199, "email": "marcellamays@progenex.com", "bairro": "Ramos", "senha": 49529397471522, "horarioAbertura": 11, "horarioFechamento": 21, "avaliacao": 2.7 }, { "cnpj": 16605345618081, "razaoSocial": "Schultz Hill", "nome": "Pacheco Parsons", "telefone": "(934) 468-2436", "cep": 965521392, "cidade": "Worton", "endereco": "Elizabeth Place", "numero": 4672, "email": "eddielara@zidant.com", "bairro": "Cotton", "senha": 80278754403200, "horarioAbertura": 6, "horarioFechamento": 22, "avaliacao": 4.8 }, { "cnpj": 68519766169507, "razaoSocial": "Angela Daniel", "nome": "Burt Hammond", "telefone": "(857) 432-2928", "cep": 969536160, "cidade": "Breinigsville", "endereco": "Otsego Street", "numero": 6500, "email": "cottonvalenzuela@digigene.com", "bairro": "Fulton", "senha": 28407465353050, "horarioAbertura": 6, "horarioFechamento": 20, "avaliacao": 4.9 }, { "cnpj": 37139891304605, "razaoSocial": "Mallory Young", "nome": "Mccray Nielsen", "telefone": "(808) 428-3189", "cep": 928527557, "cidade": "Chaparrito", "endereco": "Debevoise Street", "numero": 5245, "email": "buckleyirwin@assistia.com", "bairro": "Dorsey", "senha": 90533892686359, "horarioAbertura": 7, "horarioFechamento": 21, "avaliacao": 2.1 }, { "cnpj": 69104677851435, "razaoSocial": "Walls Lynch", "nome": "Chang Nixon", "telefone": "(828) 582-3553", "cep": 967758971, "cidade": "Kipp", "endereco": "Fountain Avenue", "numero": 2339, "email": "sextonharding@mitroc.com", "bairro": "Acevedo", "senha": 68229861100986, "horarioAbertura": 6, "horarioFechamento": 21, "avaliacao": 2.6 }, { "cnpj": 34764284395505, "razaoSocial": "Hopper Sweet", "nome": "Tisha Brennan", "telefone": "(843) 451-2315", "cep": 960254024, "cidade": "Gulf", "endereco": "Keen Court", "numero": 5809, "email": "carneyhodge@mantro.com", "bairro": "Rodriguez", "senha": 85749100534108, "horarioAbertura": 8, "horarioFechamento": 21, "avaliacao": 3.9 }, { "cnpj": 77765515561897, "razaoSocial": "Christensen Mueller", "nome": "Nguyen Vaughn", "telefone": "(914) 455-2657", "cep": 979002450, "cidade": "Noxen", "endereco": "Halsey Street", "numero": 2846, "email": "hoganconley@kiosk.com", "bairro": "Bryan", "senha": 72182746335466, "horarioAbertura": 9, "horarioFechamento": 21, "avaliacao": 4.1 }, { "cnpj": 90493474467204, "razaoSocial": "Byrd Curry", "nome": "Alice Griffith", "telefone": "(843) 470-2417", "cep": 979913838, "cidade": "Emerald", "endereco": "Bragg Street", "numero": 1282, "email": "carmenstephenson@tropolis.com", "bairro": "Holder", "senha": 83782238732431, "horarioAbertura": 8, "horarioFechamento": 20, "avaliacao": 4.2 }, { "cnpj": 75293540005268, "razaoSocial": "Karla Robbins", "nome": "Burns Kelly", "telefone": "(941) 518-3420", "cep": 940552476, "cidade": "Davenport", "endereco": "Argyle Road", "numero": 6679, "email": "marcyholland@bizmatic.com", "bairro": "Mullins", "senha": 14225836708476, "horarioAbertura": 9, "horarioFechamento": 21, "avaliacao": 1.9 }, { "cnpj": 78811602750167, "razaoSocial": "Helen Powell", "nome": "Robin Briggs", "telefone": "(881) 587-3633", "cep": 911249031, "cidade": "Westmoreland", "endereco": "Howard Alley", "numero": 698, "email": "revapuckett@zentime.com", "bairro": "Lambert", "senha": 38443757848610, "horarioAbertura": 6, "horarioFechamento": 19, "avaliacao": 2 }, { "cnpj": 56173600746188, "razaoSocial": "Hodge Holman", "nome": "Bernadette Spence", "telefone": "(845) 499-2689", "cep": 930067460, "cidade": "Dundee", "endereco": "Greene Avenue", "numero": 769, "email": "mcfarlandrollins@maineland.com", "bairro": "Hester", "senha": 37417904876901, "horarioAbertura": 7, "horarioFechamento": 20, "avaliacao": 3.6 }, { "cnpj": 48883143509399, "razaoSocial": "Travis Ruiz", "nome": "Barber Wilson", "telefone": "(833) 546-3840", "cep": 997012551, "cidade": "Statenville", "endereco": "Henderson Walk", "numero": 2921, "email": "munozmccormick@rodeocean.com", "bairro": "Paul", "senha": 24794813118822, "horarioAbertura": 10, "horarioFechamento": 22, "avaliacao": 3.7 }, { "cnpj": 83707711074985, "razaoSocial": "Marsh Mendez", "nome": "Katherine Knox", "telefone": "(926) 462-2449", "cep": 928305974, "cidade": "Woodlake", "endereco": "Montieth Street", "numero": 2582, "email": "katecaldwell@gorganic.com", "bairro": "Nguyen", "senha": 77588350649431, "horarioAbertura": 9, "horarioFechamento": 21, "avaliacao": 3.6 }, { "cnpj": 93871483888083, "razaoSocial": "Mcconnell Pacheco", "nome": "Sherman Blackburn", "telefone": "(920) 457-3668", "cep": 966569831, "cidade": "Falconaire", "endereco": "Dunne Court", "numero": 8244, "email": "fredastrong@schoolio.com", "bairro": "Buckner", "senha": 25063893914643, "horarioAbertura": 10, "horarioFechamento": 22, "avaliacao": 3.3 }, { "cnpj": 32827371589726, "razaoSocial": "Barrera Bowers", "nome": "Gonzales Pugh", "telefone": "(987) 487-2229", "cep": 945662081, "cidade": "Coalmont", "endereco": "Pierrepont Place", "numero": 8591, "email": "carolineewing@suretech.com", "bairro": "English", "senha": 43602444492848, "horarioAbertura": 9, "horarioFechamento": 22, "avaliacao": 1.9 }, { "cnpj": 82280567355429, "razaoSocial": "Velasquez Meadows", "nome": "Carissa Cash", "telefone": "(824) 597-2590", "cep": 974525952, "cidade": "Caroline", "endereco": "Milford Street", "numero": 7520, "email": "knappmejia@dreamia.com", "bairro": "Santana", "senha": 39704042598442, "horarioAbertura": 6, "horarioFechamento": 18, "avaliacao": 2.8 }])
    this.barbeariasCadastradas = JSON.parse(teste)
    this.barbeariasCadastradas = this.barbeariasCadastradas.concat(JSON.parse(localStorage.getItem('barbeariasCadastradas')!) ? JSON.parse(localStorage.getItem('barbeariasCadastradas')!) : new Array<cadastroBarbearia>())
      .sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0))
    this.barbeariasTela = structuredclone(this.barbeariasCadastradas)

    this.subject.pipe(debounceTime(200)).subscribe((txt: any) => this.pesquisar(txt.target.value));
    this.subjectServico.subscribe((servico: any) => this.escolherServico(servico));
    this.subjectFuncionario.subscribe((funcionario: any) => this.escolherFuncionario(funcionario));
    this.subjectAgendamento.subscribe((agendamento: any) => this.efetuarAgendamento(agendamento));
  }

  gerarFuncionarios() {
    let testeFuncionarios = new Array<funcionario>({ "cnpj": "123", "nome": "Jassa", "horarios": [] }, { "cnpj": "123", "nome": " Edward Scissorhands", "horarios": [] }, { "cnpj": "123", "nome": "BiruBiru", "horarios": [] }, { "cnpj": "123", "nome": "Maluco da Tesoura", "horarios": [] })

    let horarios = new Array<horario>()
    new Array(24).fill(24).forEach((a, i) => {
      horarios.push({ hora: moment({ hour: i }).format('HH:mm'), disponibilidade: true });
      horarios.push({ hora: moment({ hour: i, minute: 30 }).format('HH:mm'), disponibilidade: true });
    })
    testeFuncionarios.forEach(a => {
      a.horarios = horarios
    })
    localStorage.removeItem('funcionariosCadastrados')
    localStorage.setItem('funcionariosCadastrados', JSON.stringify(testeFuncionarios))
  }
  //primeiro passo
  escolherBarbearia(barbearia: cadastroBarbearia) {
    this.barbeariaSelecionada = barbearia
    this.evento.cnpj = this.barbeariaSelecionada.cnpj
    this.escolhendoBarbearia = false
    this.escolhendoServico = true
  }

  //segundo passo
  escolherServico(servico: any) {
    this.servicoSelecionado = servico
    this.evento.servico = servico.nome
    this.evento.valor = servico.valor
    this.escolhendoBarbearia = this.escolhendoServico = false
    this.escolhendoFuncionario = true
  }

  //terceiro passo
  escolherFuncionario(funcionario: any) {
    this.evento.funcionario = this.funcionarioSelecionado = funcionario
    this.escolhendoBarbearia = this.escolhendoServico = this.escolhendoFuncionario = false
    this.escolhendoData = true
  }

  //quarto passo
  efetuarAgendamento(agendamento: any) {
    console.log('agendamento:', agendamento)
    this.evento.horario = agendamento.hora
    this.evento.data = agendamento.data
    this.evento.usuario = JSON.parse(localStorage.getItem('logado')!).cpf
    this.evento.avaliacao = 5
    this.eventosCadastrados.push(this.evento)
    localStorage.setItem('eventosCadastrados', JSON.stringify(this.eventosCadastrados))
    console.log('this.eventosCadastrados:', this.eventosCadastrados)
    this.escolhendoData = false
    this.pagando = true
  }

  //quinto passo
  efetuarPagamento(pagamentoFinalizado?: boolean) {
    if (pagamentoFinalizado) { this.pagando = false; this.pagamentoFinalizado = true }
    else this.pagando = true
  }

  voltar() {
    if (this.escolhendoBarbearia || this.pagamentoFinalizado) {
      this.pagamentoFinalizado = false
      this.router.navigate(["/home-usuario"]);
    }
    if (this.escolhendoServico) {
      this.escolhendoServico = false;
      this.escolhendoBarbearia = true;
    } else if (this.escolhendoFuncionario) {
      this.escolhendoFuncionario = false;
      this.escolhendoServico = true;
    } else if (this.escolhendoData) {
      this.escolhendoData = false;
      this.escolhendoFuncionario = true;
    } else if (this.pagando) {
      this.pagando = false;
      this.escolhendoFuncionario = true;
    }
  }

  checarHorario(barbearia: any) {
    let hora = new Date().getHours()
    if (new Date().getDay() === 0 || new Date().getDay() === 1) return false
    if (barbearia.horarioAbertura > hora && hora < barbearia.horarioFechamento) return false
    else return true
  }

  checarAvaliacao(avaliacao?: number) {
    return new Array(Math.round(avaliacao ? avaliacao : 1))
  }

  pesquisar(txt: any) {
    this.barbeariasTela = structuredclone(this.barbeariasCadastradas.filter(a => a.nome.includes(txt)))
  }




}



// ## ##

// '{{repeat(20, 20)}}',
//   {
//     cnpj: '{{integer(10000000000000, 99999999999999)}}',
//     razaoSocial: '{{firstName()}} {{surname()}}',
//     nome: '{{firstName()}} {{surname()}}',
//     telefone: '{{phone()}}',
//     cep: '{{integer(900000000, 999999999)}}',
//     cidade: '{{city()}}',
//     endereco: '{{street()}}',
//     numero: '{{integer(0, 9999)}}',
//     email: '{{email([random])}}',
//     bairro: '{{surname()}}',
//     senha: '{{integer(10000000000000, 99999999999999)}}',
//     horarioAbertura: '{{integer(6, 12)}}',
//     horarioFechamento: '{{integer(18, 22)}}'
//   }
