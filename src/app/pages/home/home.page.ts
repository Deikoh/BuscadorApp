import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipes: RecipeItem[] = [];

  constructor(
    private readonly router: Router, //servicio para naveegar entre las vistas con rutas asignadas
    private readonly activatedRouter: ActivatedRoute, //obtener info de la ruta asociada
    private readonly recipeDataService: RecipeDataService
  ) {
    this.recipeDataService.getAllRecipes().subscribe((data:any)=>{
      this.recipes = data.recipes;
    });
  }

  onRecipeClicked(args: RecipeItem){
    //console.log('receta click', args);
    this.router.navigate(["recipe", args.id],{
      relativeTo:this.activatedRouter
    });
  }
}
