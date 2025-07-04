import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaudacaoService {
  getMensagem(nome: String) {
    return `Bem-vindo(a), ${nome}`;
  }
}
