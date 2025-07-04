import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SaudacaoService } from '../saudacao';
import { SaudacaoPipe } from '../saudacao-pipe';

@Component({
  selector: 'app-saudacao',
  imports: [FormsModule, CommonModule, SaudacaoPipe],
  templateUrl: './saudacao.html',
  styleUrl: './saudacao.scss',
})
export class Saudacao {
  nome = '';
  fotoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  mostrar = true;
  frutas = ['Maçã', 'Banana', 'Laranja'];

  ativo = false;

  mensagem = '';

  nomePipe = '';

  //Injeção de depêndencia
  constructor(private saudacaoService: SaudacaoService) {}

  dizerOla() {
    alert('Hello, World!');
  }

  gerarMensagem() {
    this.mensagem = this.saudacaoService.getMensagem(this.nome);
  }
}
