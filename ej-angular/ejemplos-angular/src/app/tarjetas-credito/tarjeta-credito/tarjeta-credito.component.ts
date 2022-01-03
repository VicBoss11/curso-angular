import { Component, OnInit } from '@angular/core';
import {
  TarjetasService
} from 'src/app/tarjetas-credito/services/tarjetas/tarjetas.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  numTarjeta: string;

  constructor(private tarjetas: TarjetasService) {
    this.numTarjeta = this.tarjetas.getNumTarjeta();
  }

  ngOnInit(): void {
  }

}
