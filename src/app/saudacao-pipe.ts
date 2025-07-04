import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saudacao',
})
export class SaudacaoPipe implements PipeTransform {
  transform(value: string): string {
    return `Olá, ${value}! Bem-vindo ao Angular.`;
  }
}
