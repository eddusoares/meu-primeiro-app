import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-headers-customizados',
  imports: [CommonModule],
  templateUrl: './post-headers-customizados.html',
  styleUrl: './post-headers-customizados.scss',
})
export class PostHeadersCustomizadosComponent {
  resposta: any;

  constructor(private http: HttpClient) {}

  enviarComHeaders() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const dados = { title: 'Teste', body: 'Corpo do post', userId: 1 };

    const headers = new HttpHeaders()
      .set('X-App-Cliente', 'Angular20')
      .set('Content-Type', 'application/json');

    this.http
      .post(url, dados, { headers })
      .subscribe((res) => (this.resposta = res));
  }
}
