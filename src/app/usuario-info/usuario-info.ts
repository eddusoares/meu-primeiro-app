import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-info',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-info.html',
  styleUrl: './usuario-info.scss',
})
export class UsuarioInfo {
  usuario$: Observable<string | null>;
  nomeDigitado = '';
  constructor(private usuarioService: Usuario) {
    this.usuario$ = this.usuarioService.usuario$;
  }

  login() {
    this.usuarioService.login(this.nomeDigitado);
    this.nomeDigitado = '';
  }

  logout() {
    this.usuarioService.logout();
  }
}
