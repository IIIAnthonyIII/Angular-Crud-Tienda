//Componente Padre

import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductoInterface } from './interface/producto.interface';
import { ShoppingCartServicio } from 'src/app/compartido/servicios/shopping-cart.service';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-productos',
  template: `
    <!-- <pre> Con esta etiqueta muestra los datos con espacios y salto  de lineas
    {{ productosIntf | json }}
    </pre> -->
    <!-- Directiva **ngFor que cambia elementos del DOM -->
    <section class="productos"> <!-- Componente padre -->
        <!-- Evento aniadirCartClick creado en producto.component.ts -->
        <!-- Funcion añadirCart creada en productos.component.ts -->
        <app-producto 
            (aniadirCartClick)="aniadirCart($event)" 
            [productoHijo]="prod"
            *ngFor="let prod of productosIntf"
        > <!-- Pasando datos del componente hijo al padre con (aniadirCartClick)="aniadirCart($event)" -->
        <!-- Pasando datos del componente padre al hijo como propiedad [productoHijo]="prod", se debe importar en producto.component.ts-->
        </app-producto> <!-- Componente hijo -->
    </section>
  `,
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productosIntf!: ProductoInterface[]; //Se pone "!" para no inicializar la variable

  constructor(private productoSvc: ProductosService, private shoppingCartSvc: ShoppingCartServicio) { } //Para consumir la API se necesita pasar el parametro del servicio

  ngOnInit(): void {
    this.productoSvc.obtenerProductos()
    .pipe( //Ayuda  a transformar datos
      //tap( res => console.log(res)) Muestra lo de la API en consola
      tap((productosIntf: ProductoInterface[]) => this.productosIntf = productosIntf) //Obtener datos de API
    )
    .subscribe(); //Llamar Observable de productos.service.ts
  }

  aniadirCart(productoRecibido: ProductoInterface): void{
    console.log("Añadir producto", productoRecibido);
    this.shoppingCartSvc.updatedCart(productoRecibido)
  }
}
