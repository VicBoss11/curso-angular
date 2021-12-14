import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp03-input-y-output',
  templateUrl: './cmp03-input-y-output.component.html',
  styleUrls: ['./cmp03-input-y-output.component.css']
})
export class Cmp03InputYOutputComponent implements OnInit {
  nombreLuke: string = 'Luke Skywalker';
  nombreLeia: string = 'Leia Organa';

  constructor() { }

  ngOnInit(): void {
  }

  muestraEvento(mensaje: string) {
    console.log(mensaje);
  }

  cambiarNombre(nuevoNombre: string): void {
    this.nombreLeia = (nuevoNombre);
  }
}
