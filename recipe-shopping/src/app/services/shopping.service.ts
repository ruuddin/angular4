import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    // ings.forEach((i:Ingredient) => this.addIngredient(i))

    //we dont want to emit several events, rather push elements in one go
    //spread operator ... turns an array into a list
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
