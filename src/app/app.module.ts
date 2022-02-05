import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'; //Esto se agrega por FormsModule
import { ComponenteHeader } from './compartido/componentes/header/header.component'; //Agregado para usar el ComponenteHeader
import { MaterialModulo } from './material.module'; //Esto se usa para MaterialModulo
import { HttpClientModule } from '@angular/common/http';//Sirve para hacer llamada a API en productos.service.ts
import { CartComponente } from './compartido/componentes/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHeader, //Viene para usar la etiqueta app-header en app.component.html
    CartComponente, //Viene para usar la etiqueta app-cart en header.component.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  //Esto se importa para usar ngModel
    MaterialModulo,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
