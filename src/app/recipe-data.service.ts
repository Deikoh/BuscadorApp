import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  private apiAll = 'https://dummyjson.com/recipes?limit=0'
  private apiBase = 'https://dummyjson.com/recipes'

  constructor(
    private readonly httpclient:HttpClient
  ) { }
  //get all
  getAllRecipes(){
    return this.httpclient.get(this.apiAll);
  }
  //get by id
  getRecipesById(id:number){
    const api = this.apiBase + '/'+ id;
    return this.httpclient.get(api);
  }
}
