import { Component } from "@angular/core";
import { ShoppingCartServicio } from "../../service/shopping-cart.service";

@Component({
    selector: 'app-cart',
    template: `
        <ng-container *ngIf="{ total: total$ | async, cantidad: cantidad$ | async } as dataCart">
            <ng-container *ngIf="dataCart.total != 0">
                <mat-icon>add_shopping_cart</mat-icon>
                {{dataCart.total | currency}}
                ({{dataCart.cantidad}})
            </ng-container>
        </ng-container>
    `,
})

export class CartComponente {
    cantidad$ = this.shoppingCartSvc.cantidadAccion$;
    total$ = this.shoppingCartSvc.totalAccion$;

    constructor(private shoppingCartSvc: ShoppingCartServicio) {}
}