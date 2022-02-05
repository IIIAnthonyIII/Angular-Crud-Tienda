import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"; //Importando la Toolbar de la página de Angular Material de componentes
import { MatCardModule } from '@angular/material/card'; //Importando mat-card
import { MatButtonModule } from '@angular/material/button'; //Importando mat-flat-button
import { MatIconModule } from '@angular/material/icon'; //Importando mat-icon
import { MatFormFieldModule } from '@angular/material/form-field'; //Importando mat-form-field
import { MatRadioModule } from '@angular/material/radio'; //Importando mat-radio-group
import { MatInputModule } from "@angular/material/input"; //Importando input
import { MatSelectModule } from '@angular/material/select'; //Importando mat-select

@NgModule({
    exports:[
        MatToolbarModule, 
        MatCardModule, 
        MatButtonModule, 
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
    ] //Esto para que esté disponible para otros modulos
})

export class MaterialModulo {}
