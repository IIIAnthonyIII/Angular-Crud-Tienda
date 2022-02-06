import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataServicio } from 'src/app/compartido/servicios/data.service';
import { TiendaInterface } from "../../compartido/interfaces/tiendas.interface";

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
  stores: TiendaInterface[] = [];

  constructor(private dataSvc: DataServicio) { }

  ngOnInit(): void {
    this.obtenerTiendas();
  }

  recogidaEntrega(value: boolean): void {
    console.log(value);
  }

  onSubmit():void{
    console.log("Guardar");
  }

  obtenerTiendas():void{
    this.dataSvc.obtenerTiendas()
    .pipe(
      tap((tiendas:TiendaInterface[]) => this.stores = tiendas)
    ).subscribe();
  }
}