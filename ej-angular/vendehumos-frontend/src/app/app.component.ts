import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vendehumos-frontend';

  vendehumos = [
    {
      id: 1,
      nombre: 'Josheff Ajram',
      descripcion: '',
      categorias: ['Trading'],
      urlImagen: '',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [2, 3],
      usuarioId: 1
    },
    {
      id: 2,
      nombre: 'Roberto Gamboa',
      descripcion: '',
      categorias: ['Trafficker'],
      urlImagen: '',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [1],
      usuarioId: 2
    },
    {
      id: 3,
      nombre: 'Willyrex',
      descripcion: '',
      categorias: ['NFTs'],
      urlImagen: '',
      fechaAlta: new Date(2020, 2, 13),
      votadoPor: [1, 2],
      usuarioId: 3
    }
  ]
}

class Vendehumo {
  constructor() {
  }
}
