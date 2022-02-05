import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ProductoInterface } from "src/app/paginas/productos/interface/producto.interface";

@Injectable({ 
    providedIn: 'root' 
})

export class ShoppingCartServicio {
    productoServicio: ProductoInterface[] = [];

    //Subject es un tipo Observable
    private cartSubject = new Subject<ProductoInterface[]>();
    private totalSubject = new Subject<number>();
    private cantidadSubject = new Subject<number>();

    //Devolver el Observable a la aplicacion
    //Existe una convencion de cuando se trabaja con Observables se pone $
    get cartAccion$ (): Observable<ProductoInterface[]>{
        return this.cartSubject.asObservable();
    }
    get totalAccion$ (): Observable<number>{
        return this.totalSubject.asObservable();
    }
    get cantidadAccion$ (): Observable<number>{
        return this.cantidadSubject.asObservable();
    }

    private aniadirCarrito(productoRecibido: ProductoInterface): void{
        this.productoServicio.push(productoRecibido);
        this.cartSubject.next(this.productoServicio);
    }

    private cantidadProductos (): void{
        const cantidad = this.productoServicio.length;
        this.cantidadSubject.next(cantidad);
    }

    private calcularTotal (): void{
        //acc=actual, prod=producto, es 0 el valor inicial
        const total = this.productoServicio.reduce((acc, prod) => acc += prod.price, 0);
        this.totalSubject.next(total);
    }

    updatedCart(productoRecibido: ProductoInterface): void {
        this.aniadirCarrito(productoRecibido);
        this.cantidadProductos();
        this.calcularTotal();
    }
}