import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-operadores-rxjs',
  imports: [FormsModule, CommonModule],
  templateUrl: './operadores-rxjs.html',
  styleUrl: './operadores-rxjs.scss'
})
export class OperadoresRxjs {
  userId: string = '';
  posts$!: Observable<any[]>;

  constructor( private http: HttpClient){}

  buscarPosts() {
    //Se nao houver userId, retorna um observable vazio
    if (!this.userId) {
      this.posts$ = of([]);
    }

    // Busca e filtra os posts pelo operador RxJS
    this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => posts.filter(post => post.userId === +this.userId))
    );
  }
}
