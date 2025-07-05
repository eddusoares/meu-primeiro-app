import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-angular',
  imports: [CommonModule],
  templateUrl: './observable-angular.html',
  styleUrl: './observable-angular.scss'
})
export class ObservableAngular {
 posts$!: Observable<any[]>;

 constructor(private http: HttpClient){}

 buscarPosts(){
  this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
 }
}
