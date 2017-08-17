import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "../components/recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','Description test','https://upload.wikimedia.org/wikipedia/commons/a/ad/Dal_Gosht.JPG', 
    [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Biryani','Biryani test','https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg', 
    [new Ingredient('Raita', 1), new Ingredient('Chicken', 20)])
  ];
  recipeSelected = new EventEmitter<Recipe>();
  recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    //return new copy of array 
    return this.recipes.slice();
  }
}
