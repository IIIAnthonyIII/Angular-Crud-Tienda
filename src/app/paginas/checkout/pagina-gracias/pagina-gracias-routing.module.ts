import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaGraciasComponent } from './pagina-gracias.component';

const routes: Routes = [{ path: '', component: PaginaGraciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaGraciasRoutingModule { }
