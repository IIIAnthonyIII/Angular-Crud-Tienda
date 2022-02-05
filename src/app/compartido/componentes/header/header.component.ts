import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //Con esta etiqueta se reutiliza el componente
  template: `
  <mat-toolbar color="primary"> <!-- Para usar esta etiqueta se debe importar en material.module.ts-->
    <span>Mi tienda</span>
    <span class="spacer"></span>
    <app-cart></app-cart> <!-- Para que funcione se importa en app.module.ts -->
  </mat-toolbar>
  `, //Esto es template en linea
  styleUrls: ['./header.component.scss'] //Estilos
})

export class ComponenteHeader {}