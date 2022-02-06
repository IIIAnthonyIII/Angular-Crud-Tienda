import { Component, OnInit } from '@angular/core';
import { ShoppingCartServicio } from 'src/app/compartido/servicios/shopping-cart.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  total$ = this.shoppingCartSvc.totalAccion$;
  cart$ = this.shoppingCartSvc.cartAccion$;

  constructor(private shoppingCartSvc: ShoppingCartServicio) { }

  ngOnInit(): void {
  }
}
