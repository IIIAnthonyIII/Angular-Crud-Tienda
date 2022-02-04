import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'productos', 
    loadChildren: () => import('./paginas/productos/productos.module').then(m => m.ProductosModule) 
  }, //Para usarlo se debe importar en app.module.ts y viene de miTienda.component.ts
  
  { path: '**', redirectTo:'', pathMatch:'full' }, //Para redigir a pagina principal en caso de que no exista ruta, debe ser último porque las rutas se revisan por orden, Estado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }