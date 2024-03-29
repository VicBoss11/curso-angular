import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarDigitos'
})
export class OcultarDigitosPipe implements PipeTransform {

  transform(value: string): string {
    const ultimosNumeros = value.slice(-4);
    const primerosNumeros = value.slice(0, -4);
    const numOcultos = primerosNumeros.replace(/\d/g, '*');

    return numOcultos + ultimosNumeros;
  }

}
