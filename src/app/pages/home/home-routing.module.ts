import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recipe/:id', //ruta para detalles de una receta,:id es un param dinamico
    component: RecipeDetailPage,
  },
  {
    path: '**', //ruta comodin
    redirectTo:'', //rutea a raiz
    pathMatch:'full' // asegura la redireccion solo si la ruta coincide
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
