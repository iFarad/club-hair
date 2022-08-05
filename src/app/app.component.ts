import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    public router: Router,
  ) { }
  
  logado = JSON.parse(localStorage.getItem('logado')!) ? true : false;

  title = 'club-hair';

  ngAfterViewChecked(){
    this.logado = JSON.parse(localStorage.getItem('logado')!) ? true : false;
  }

  deslogar(){
    this.logado = false
    localStorage.removeItem('logado')
    this.router.navigate(['/login']);
  }
}



// Models

// - Login
// 	* Cadastro Usuario
// 	Nome Completo
// 	E-mail
// 	Telefone
// 	Cpf
// 	Senha
// 	Foto
	
// 	*Login Usuario
// 	Cpf
// 	Senha
	
// 	* 
