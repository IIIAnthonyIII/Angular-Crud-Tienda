import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";
import { ProductoInterface } from "src/app/paginas/productos/interface/producto.interface";

@Injectable({ 
    providedIn: 'root' 
})

export class ShoppingCartServicio {
    productoServicio: ProductoInterface[] = [];

    //Subject es un tipo Observable solo devuelve el último valor pero no los anteriores
    //BehaviorSubject si que devuelve los valores anteriores pero necesita de un valor por defecto
    private cartSubject = new BehaviorSubject<ProductoInterface[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private cantidadSubject = new BehaviorSubject<number>(0);

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
        //Con find retorno el primer valor encontrado, la funcion flecha es un if
        const productoEnCarrito = this.productoServicio.find(({id}) => id == productoRecibido.id)

        if(productoEnCarrito){
            productoEnCarrito.quantity += 1; //Si está en el carrito la cantidad se aumenta 1
        }else{
            this.productoServicio.push({...productoRecibido, quantity:1}) //Añadiendo nueva propiedad (quantity) al productoRecibido
        }

        this.cartSubject.next(this.productoServicio);
    }

    private cantidadProductos (): void{
        const cantidad = this.productoServicio.reduce((acc, prod) => acc += prod.quantity, 0);;
        this.cantidadSubject.next(cantidad);
    }

    private calcularTotal (): void{
        //acc=actual, prod=producto, es 0 el valor inicial
        const total = this.productoServicio.reduce((acc, prod) => acc += (prod.price * prod.quantity), 0);
        this.totalSubject.next(total);
    }

    updatedCart(productoRecibido: ProductoInterface): void {
        this.aniadirCarrito(productoRecibido);
        this.cantidadProductos();
        this.calcularTotal();
    }
}