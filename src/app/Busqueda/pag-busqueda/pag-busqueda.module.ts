import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagBusquedaPageRoutingModule } from './pag-busqueda-routing.module';

import { PagBusquedaPage } from './pag-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagBusquedaPageRoutingModule
  ],
  declarations: [PagBusquedaPage]
})
export class PagBusquedaPageModule {}
