import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {
  @Input() errores: ValidationErrors | null = {};

  mensajesError: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.errores);

    this.mensajesError = [];

    for (let key in this.errores) {
      if (key === 'required') {
        this.mensajesError.push('El campo es obligatorio');
      } else if (key === 'minlength') {
        const error = this.errores[key];
        const msg = `Te faltan ${ error.requiredLength - error.actualLength }/${ error.requiredLength } caracteres`;

        this.mensajesError.push(msg);
      } else if (key === 'pattern') {
        const error = this.errores[key];
        const msg = `El ${ error.actualValue } no cumple con el siguiente patrón ${ error.requirePattern }`;

        this.mensajesError.push(msg);
      } else if (key === 'esStark') {
        const error = this.errores[key];
        const msg = `${ error.nombreActual } no es un Stark (${ error.nombresValidos.join(
          ', ') })`;

        this.mensajesError.push(msg);
      } else if (key === 'esPasswordSegura') {
        const error = this.errores[key];

        if (!error.simbolos) {
          this.mensajesError.push(
            'La contraseña tiene que tener al menos un símbolo'
          );
        }

        if (!error.mayus) {
          this.mensajesError.push(
            'La contraseña tiene que tener al menos una letra mayúscula'
          );
        }
      }
    }
  }
}
