import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-autenticacao',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-autenticacao.html',
  styleUrl: './post-autenticacao.scss',
})
export class PostAutenticacao {
  resposta: any;
  token = 'SEU_TOKEN_AQUI'; //Substitua pelo seu token Real

  constructor(private http: HttpClient) {}

  enviarAutenticado() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const dados = { foo: 'bar' };

    const headers = new HttpHeaders().set(
      'Autorization',
      `Bearer ${this.token}`
    );

    this.http
      .post(url, dados, { headers })
      .subscribe((res) => (this.resposta = res));
  }
}
