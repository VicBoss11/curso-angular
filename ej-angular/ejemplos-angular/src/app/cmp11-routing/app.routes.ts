import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/cmp11-routing/error404/error404.component';
import {
  InfoUsuarioComponent
} from 'src/app/cmp11-routing/info-usuario/info-usuario.component';
import { InicioComponent } from 'src/app/cmp11-routing/inicio/inicio.component';
import {
  NuevoUsuarioComponent
} from 'src/app/cmp11-routing/nuevo-usuario/nuevo-usuario.component';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'nuevo-usuario', component: NuevoUsuarioComponent},
  {path: 'usuario/:id', component: InfoUsuarioComponent},
  {path: '**', component: Error404Component}
];

export const RoutingModule = RouterModule.forRoot(appRoutes)
