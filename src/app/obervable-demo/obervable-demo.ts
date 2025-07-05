import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './obervable-demo.html',
  styleUrl: './obervable-demo.scss'
})
export class ObservableDemo implements OnInit{
  mensagem = 'x';

  ngOnInit(){
    const obs = new Observable<string>(observer => {
      observer.next('Primeiro valor');
      setTimeout(()=> observer.next('Segundo valor (após 2 segundos)!'), 2000);
      setTimeout(()=> observer.complete(), 3000);
    });

    obs.subscribe({
      next: (valor) => this.mensagem = valor,
      complete: () => this.mensagem += ' [Observable completo!]'
    })
  }

}
