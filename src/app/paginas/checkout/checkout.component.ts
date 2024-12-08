import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs/operators';
import { DetallesInterface, PedidoInterface } from 'src/app/compartido/interfaces/pedido.interface';
import { DataServicio } from 'src/app/compartido/service/data.service';
import { ShoppingCartServicio } from 'src/app/compartido/service/shopping-cart.service';
import { TiendaInterface } from "../../compartido/interfaces/tiendas.interface";
import { ProductoInterface } from '../productos/interface/producto.interface';
import { ProductosService } from '../../compartido/service/productos.service';

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
  esEntrega = true;
  carrito: ProductoInterface[] = [];
  stores: TiendaInterface[] = [];

  constructor(
    private dataSvc: DataServicio, 
    private shoppingCartSvc: ShoppingCartServicio,
    private router: Router,
    private productoSvc: ProductosService,
  ) { 
    this.verificarCarritoVacio();
  }

  ngOnInit(): void {
    this.obtenerTiendas();
    this.obtenerDataCarrito();
    this.prepararDetalles();
  }

  recogidaEntrega(value: boolean): void {
    this.esEntrega = value;
  }

  onSubmit({value: formData}: NgForm):void{ //De NgForm se necesita "value" pero se renombra a "formData"
    console.log("Guardar", formData);
    const data: PedidoInterface = {
      ...formData,
      date: this.obtenerFechaActual(),
      isDelivery: this.esEntrega,
    }
    this.dataSvc.guardarPedido(data).pipe(
      tap(res=>console.log('Pedido -> ', res)),
      switchMap(({id: orderId})=>{
        //const orderId = order.id;
        const details = this.prepararDetalles();
        return this.dataSvc.guardarDetallesPedido({details, orderId});
      }),//Nombre de las variables que proviene de DetallesPedidoInterface
      tap(() => this.router.navigate(['/checkout/pagina-gracias'])),
      delay(4000),//Tiempo en milisegundos para que se ejecute algo
      tap(() => this.shoppingCartSvc.resetearCarrito()),
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
    this.carrito.forEach((producto: ProductoInterface) =>{
      const {id: productId, name: productName, quantity, stock} = producto; //Estos nombres son de producto.interface.ts
      const updatedStock = (stock - quantity);

      this.productoSvc.updatedStockProdServ(productId, updatedStock).pipe(
        tap(res => detalles.push({productId, productName, quantity}))
      ).subscribe();  //Estos nombres son de pedido.interface.ts
    })
    return detalles;
  }

  private obtenerDataCarrito(): void{
    this.shoppingCartSvc.cartAccion$.pipe(
      tap((productos: ProductoInterface[])=>this.carrito = productos)
    ).subscribe();
  }

  private verificarCarritoVacio(): void{
    this.shoppingCartSvc.cartAccion$.pipe(
      tap((productos: ProductoInterface[]) => {
        if(Array.isArray(productos) && !productos.length){
          this.router.navigate(['/productos']);
        }
      })
      ).subscribe();
  }
}