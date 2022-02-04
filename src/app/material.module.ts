import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; //Importando la Toolbar de la página de Angular Material de componentes
import { MatCardModule } from '@angular/material/card'; //Importando la mat-card

@NgModule({
    exports:[MatToolbarModule, MatCardModule] //Esto para que esté disponible para otros modulos
})

export class MaterialModulo {}