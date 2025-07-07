import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [FormsModule, CommonModule],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.scss',
})
export class SwitchMap {
  userId$ = new BehaviorSubject<number | null>(null);
  posts$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.userId$.pipe(
      switchMap((userId) => {
        if (userId == null || userId === 0) return [];
        return this.http.get<any[]>(
          'https://jsonplaceholder.typicode.com/posts?userId=' + userId
        );
      })
    );
  }

  setUserId(valor: string) {
    const id = valor ? +valor : null;
    this.userId$.next(id);
  }

  onUserIdInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.setUserId(value);
  }
}
