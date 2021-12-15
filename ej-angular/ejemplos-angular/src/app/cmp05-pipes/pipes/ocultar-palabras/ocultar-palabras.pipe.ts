import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(texto: string, palabras: string[]): string {
    palabras.forEach(palabra => {
      texto = texto.replaceAll(palabra.toLowerCase(), '*'.repeat(palabra.length));
    })

    return texto;
  }

}
