import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Saudacao } from './saudacao/saudacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saudacao, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'meu-primeiro-app';
}
