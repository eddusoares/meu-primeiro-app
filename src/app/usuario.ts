import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  private usuarioSubject = new BehaviorSubject<string | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  login(nome: string) {
    this.usuarioSubject.next(nome);
  }

  logout() {
    this.usuarioSubject.next(null);
  }

  constructor() {}
}
