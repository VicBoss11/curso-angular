import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  OcultarDigitosPipe
} from 'src/app/tarjetas-credito/pipes/ocultar-digitos/ocultar-digitos.pipe';
import {
  tarjetasCreditoRouting
} from 'src/app/tarjetas-credito/tarjetas-credito.routing';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';

@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarDigitosPipe
  ],
  exports: [
    TarjetaCreditoComponent
  ],
  imports: [
    CommonModule,
    tarjetasCreditoRouting
  ]
})
export class TarjetasCreditoModule {
}
