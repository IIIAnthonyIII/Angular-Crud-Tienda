import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { MaterialModulo } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModulo //Importando para la mat-card
  ]
})
export class ProductosModule { }
