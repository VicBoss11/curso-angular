import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

function esStark(control: AbstractControl): ValidationErrors | null {
  const nombres = ['robb', 'arya', 'tony', 'sansa', 'rickon', 'bran', 'nedd'];

  if (nombres.includes(control.value.toLowerCase())) {
    return null;
  }

  return {
    esStark: {
      nombresValidos: nombres,
      nombreActual: control.value
    }
  } as ValidationErrors;
}

interface IOpcionesPassword {
  mayus?: boolean;
  simbolos?: boolean;
}

function esPasswordSegura(opciones: IOpcionesPassword): ValidatorFn {
  return (control) => {
    let hayMayus: boolean = false;
    let haySimbolos: boolean = false;

    if (opciones?.mayus){
      hayMayus = control.value.toLowerCase() !== control.value;
    }

    if (opciones?.simbolos) {
      haySimbolos = /\W+/.test(control.value);
    }

    if (hayMayus && haySimbolos) {
      return null;
    }

    return {
      esPasswordSegura: {
        simbolos: haySimbolos,
        mayus: hayMayus
      }
    };
  }
}

function esPasswordRepetidaValida(control: AbstractControl): ValidationErrors | null {
  const password = control.parent?.value.password;
  const confirmarPassword = control.value;

  if (password === confirmarPassword) {
    return null
  }

  return {
    confirmarPassword: true
  }
}

export const CustomValidators = {
  esStark,
  esPasswordSegura,
  esPasswordRepetidaValida
};
