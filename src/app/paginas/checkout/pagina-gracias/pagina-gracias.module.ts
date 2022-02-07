import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaGraciasRoutingModule } from './pagina-gracias-routing.module';
import { PaginaGraciasComponent } from './pagina-gracias.component';


@NgModule({
  declarations: [
    PaginaGraciasComponent
  ],
  imports: [
    CommonModule,
    PaginaGraciasRoutingModule
  ]
})
export class PaginaGraciasModule { }
