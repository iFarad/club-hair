import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { cadastroUsuario } from './cadastro-usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor() { }

  usuario = new cadastroUsuario();

  usuariosCadastrados = new Array<cadastroUsuario>();

  senhaConfirmacao: string = '';

  alert = false

  ngOnInit(): void {
  }

  cadastrar() {
    if (Object.values(this.usuario).every(x => x === null || x === '')) {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
      return
    }
    this.usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')!) ? JSON.parse(localStorage.getItem('usuariosCadastrados')!) : new Array<cadastroUsuario>();
    this.usuariosCadastrados.push(this.usuario)
    console.log('usuariosCadastrados:', this.usuariosCadastrados)
    localStorage.setItem('usuariosCadastrados', JSON.stringify(this.usuariosCadastrados))
  }
}
