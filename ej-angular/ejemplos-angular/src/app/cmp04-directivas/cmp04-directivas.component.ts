import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent implements OnInit {
  tachada: boolean = false;
  colorLetra: string = '#ffffff';

  logueado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTachada(): void {
    this.tachada = !this.tachada;
  }
}
