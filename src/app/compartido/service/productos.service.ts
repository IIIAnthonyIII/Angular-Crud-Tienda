import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../../paginas/productos/interface/producto.interface';
import { apiConfig } from "src/app/config/config";
@Injectable({
  providedIn: 'root' //Esto sirve para poder usarse en toda la aplicacion
})

//Llamada a API
export class ProductosService {
  private apiURL = `${apiConfig.uriApi}/products`; /*Cualquier API, este caso viene de la carpeta server que es API local*/
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<ProductoInterface[]>{ //Aqui se usa producto.interface.ts, es Observable ya que se va a utilizar un flujo de datos en el tiempo por la respuesta de la API, parecido a "Promise"
    return this.http.get<ProductoInterface[]>(this.apiURL); //Petición a la API, devuelve un arreglo
  }

  updatedStockProdServ(productId: number, stock:number): Observable<any> {
    const body = {"stock": stock}
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body)
  }
}