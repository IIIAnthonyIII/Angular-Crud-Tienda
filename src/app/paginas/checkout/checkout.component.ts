import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { DetallesInterface, PedidoInterface } from 'src/app/compartido/interfaces/pedido.interface';
import { DataServicio } from 'src/app/compartido/servicios/data.service';
import { ShoppingCartServicio } from 'src/app/compartido/servicios/shopping-cart.service';
import { TiendaInterface } from "../../compartido/interfaces/tiendas.interface";
import { ProductoInterface } from '../productos/interface/producto.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  modelo = {
    nombre: "",
    tienda: "",
    direccion: "",
    ciudad:"",
  }
  esEntrega = false;
  carrito: ProductoInterface[] = [];
  stores: TiendaInterface[] = [];

  constructor(private dataSvc: DataServicio, private shoppingCartSvc: ShoppingCartServicio) { }

  ngOnInit(): void {
    this.obtenerTiendas();
  }

  recogidaEntrega(value: boolean): void {
    this.esEntrega = value;
  }

  onSubmit({value: formData}: NgForm):void{ //De NgForm se necesita "value" pero se renombra a "formData"
    console.log("Guardar", formData);
    const data: PedidoInterface = {
      ...formData,
      date: this.obtenerFechaActual(),
      pickup: this.esEntrega
    }
    this.dataSvc.guardarPedido(data).pipe(
      tap(res=>console.log('Pedido -> ', res)),
      switchMap((pedido)=>{
        const detalles = {};
        return this.dataSvc.guardarDetallesPedido(detalles);
      }),
      tap(res=>console.log('Finish -> ', res)),
    ).subscribe();
  }

  private obtenerTiendas():void{
    this.dataSvc.obtenerTiendas()
    .pipe(
      tap((tiendas:TiendaInterface[]) => this.stores = tiendas)
    ).subscribe();
  }

  private obtenerFechaActual(): string{
    return new Date().toLocaleDateString(); //Con esto devuelve la fecha en formato string
  }

  private prepararDetalles(): DetallesInterface[] {
    const detalles: DetallesInterface[] = [];
    return detalles;
  }

  private obtenerDataCarrito(): void{
    this.shoppingCartSvc.cartAccion$.pipe(
      tap((productos: ProductoInterface[])=>this.carrito = productos)
    ).subscribe();
  }
}