import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "../components/recipes/recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','Description test','https://upload.wikimedia.org/wikipedia/commons/a/ad/Dal_Gosht.JPG'),
    new Recipe('Biryani','Biryani test','https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();
  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    //return new copy of array 
    return this.recipes.slice();
  }
}
