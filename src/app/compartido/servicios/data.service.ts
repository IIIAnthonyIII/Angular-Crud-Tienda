import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
}