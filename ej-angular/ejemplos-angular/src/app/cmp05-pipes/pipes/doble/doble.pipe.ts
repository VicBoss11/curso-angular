import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, desc?: number): number {
    const resultado = value * 2;

    return desc ? resultado - desc :  resultado;
  }

}
