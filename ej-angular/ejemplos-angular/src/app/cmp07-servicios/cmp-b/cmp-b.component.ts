import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/cmp07-servicios/services/datos/datos.service';
import { EventosService } from 'src/app/cmp07-servicios/services/eventos/eventos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = [];
  isLoggedIn: boolean = false;

  constructor(private datosService: DatosService, private eventos: EventosService) {
    this.eventos.authEvent$.subscribe((isLoggedIn: boolean) => {
      console.log('aaa');

      this.isLoggedIn = isLoggedIn;
    })
  }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos();
  }

  guardar(texto: string) {
    this.datosService.addDatos(texto);
  }
}
