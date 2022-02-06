import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModulo } from 'src/app/material.module';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    MaterialModulo,
  ]
})
export class CheckoutModule { }
