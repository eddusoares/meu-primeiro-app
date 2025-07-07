import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  imports: [CommonModule],
  templateUrl: './debounce-time.html',
  styleUrl: './debounce-time.scss',
})
export class DebounceTime {
  private userId$ = new BehaviorSubject<number | null>(null);
  posts$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.userId$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
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
