import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/components/recipe-item/recipe-item';
import { RecipeDataService } from 'src/app/recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe!: RecipeItem;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly recipeDataSevice:RecipeDataService
  ) {
    //obtener el id de la receta mediante los parametros de la ruta
    //es un array con todos los parametros de la pagina
    const id = this.route.snapshot.params['id'];
    this.recipeDataSevice.getRecipesById(id).subscribe((data:any)=>{
      this.recipe = data;
    });
  }

  ngOnInit() {
  }

}
