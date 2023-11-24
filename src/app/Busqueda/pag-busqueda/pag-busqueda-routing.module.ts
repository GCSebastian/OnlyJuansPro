import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagBusquedaPage } from './pag-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: PagBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagBusquedaPageRoutingModule {}
