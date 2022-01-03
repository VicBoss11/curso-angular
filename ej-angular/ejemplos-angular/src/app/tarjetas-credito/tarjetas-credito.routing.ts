import { RouterModule, Routes } from '@angular/router';
import {
  TarjetaCreditoComponent
} from 'src/app/tarjetas-credito/tarjeta-credito/tarjeta-credito.component';

const tarjetasCreditoRoutes: Routes = [
  {path: '', component: TarjetaCreditoComponent}
];

export const tarjetasCreditoRouting = RouterModule.forChild(tarjetasCreditoRoutes)
