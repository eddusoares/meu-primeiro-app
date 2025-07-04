import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class PostsComponent {
  posts: any[] = [];
  userId: string = '';
  carregando = false;

  titulo = '';
  corpo = '';
  resposta: any;

  constructor(private http: HttpClient) {}

  criarPost() {
    const params = new HttpParams().set('token', 'abc');

    this.carregando = true;
    //Cria o objeto de dados par ao body do Post
    const dados = {
      title: this.titulo,
      body: this.corpo,
      userId: 1, //exemplo, pode ser dinâmico
    };

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', dados, { params })
      .subscribe({
        next: (res) => {
          this.resposta = res;
          this.carregando = false;
        },
        error: (err) => {
          alert('Erro ao enviar post!');
          this.carregando = false;
        },
      });
  }

  buscarPosts() {
    let params = new HttpParams();
    if (this.userId) {
      params = params.set('userId', this.userId);
    }
    this.carregando = true;
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts', { params })
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.carregando = false;
        },
        error: (err) => {
          alert('Erro ao buscar posts!');
          this.carregando = false;
        },
      });
  }
}
