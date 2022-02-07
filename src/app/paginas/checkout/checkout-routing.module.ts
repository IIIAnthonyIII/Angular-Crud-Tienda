import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [{ path: '', component: CheckoutComponent }, { path: 'paginaGracias', loadChildren: () => import('./pagina-gracias/pagina-gracias.module').then(m => m.PaginaGraciasModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
