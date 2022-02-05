import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; //Importando la Toolbar de la página de Angular Material de componentes
import { MatCardModule } from '@angular/material/card'; //Importando la mat-card
import { MatButtonModule } from '@angular/material/button'; //Importando mat-flat-button
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports:[MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule] //Esto para que esté disponible para otros modulos
})

export class MaterialModulo {}
