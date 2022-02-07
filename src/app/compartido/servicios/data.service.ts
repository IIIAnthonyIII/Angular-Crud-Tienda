import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetallesPedidoInterface, PedidoInterface } from "../interfaces/pedido.interface";
import { TiendaInterface } from "../interfaces/tiendas.interface";

@Injectable({
    providedIn: 'root',
})

export class DataServicio{
    private apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient){}

    obtenerTiendas():Observable<TiendaInterface[]>{
        return this.http.get<TiendaInterface[]>(`${this.apiURL}/stores`) //Ruta de la API
    }

    guardarPedido(pedido: PedidoInterface):Observable<PedidoInterface>{
        return this.http.post<PedidoInterface>(`${this.apiURL}/orders`, pedido)
    }

    guardarDetallesPedido(detalles: DetallesPedidoInterface):Observable<DetallesPedidoInterface>{
        return this.http.post<DetallesPedidoInterface>(`${this.apiURL}/detailsOrders`,detalles)
    }
}