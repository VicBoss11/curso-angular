import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(values: Array<string>, filtro: string): Array<string> {
    return values.filter(value => value.includes(filtro));
  }

}
