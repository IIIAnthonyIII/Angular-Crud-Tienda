import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header', //Con esta etiqueta se reutiliza el componente
  template: `
  <mat-toolbar color="primary"> <!-- Para usar esta etiqueta se debe importar en material.module.ts-->
    <a [routerLink]="['/']"><span>Mi tienda</span></a> <!-- RouterLink para enviar a otra pagina -->
    <span class="spacer"></span>
    <app-cart class="mouseHover" (click)="irCheckout()"></app-cart> <!-- Para que funcione se importa en app.module.ts -->
  </mat-toolbar>
  `, //Esto es template en linea
  styleUrls: ['./header.component.scss'] //Estilos
})

export class ComponenteHeader {
  constructor(private router: Router){}

  irCheckout():void{
    this.router.navigate(['/checkout']);  
  }
}