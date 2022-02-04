import { Component, OnInit } from '@angular/core';
import { ProductosService } from './servicios/productos.service';
import { tap } from 'rxjs/operators';
import { ProductoInterface } from './interface/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productosIntf!: ProductoInterface[]; //Se pone "!" para no inicializar la variable

  constructor(private productoSvc: ProductosService) { } //Para consumir la API se necesita pasar el parametro del servicio

  ngOnInit(): void {
    this.productoSvc.obtenerProductos()
    .pipe( //Ayuda  a transformar datos
      //tap( res => console.log(res)) Muestra lo de la API en consola
      tap((productosIntf: ProductoInterface[]) => this.productosIntf = productosIntf) //Obtener datos de API
    )
    .subscribe(); //Llamar Observable de productos.service.ts
  }

}
