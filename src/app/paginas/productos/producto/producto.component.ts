//Componente Hijo

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoInterface } from '../interface/producto.interface'; //Importando datos para el hijo

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //Mecanismo de Angular que actualiza un componente o toda la vista en caso de que la data haya cambiado. Se usa Onpush ya que solo el @Input cambia.
})
export class ProductoComponent{
  
  //Con @Input se pasa datos del componente padre al hijo
  @Input() productoHijo!: ProductoInterface; //Pasando propiedad para productos.component.html y producto.component.html
  
  //Con @Output se pasa datos del componente hijo al padre
  @Output() aniadirCartClick = new EventEmitter<ProductoInterface>(); //Evento personalizado

  onClick(): void{
    //console.log("Click", this.productoHijo);
    this.aniadirCartClick.emit(this.productoHijo)
  }
}