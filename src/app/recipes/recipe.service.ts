import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Githeru',
      'This is a easy to make githeri recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUGwL_foiU67pQaVWUmxWmgGU2W67R9Vxsw&usqp=CAU',
      [new Ingredient('maize', 20), 
      new Ingredient('beans', 30)]
    ),
    new Recipe(
      'Ugali mayai recipe',
      'The easiest meal to mak for a comrade',
      'https://i0.wp.com/kaneskitchenaffair.com/wp-content/uploads/2022/01/TOP00004-scaled.jpg?fit=2560%2C1708&ssl=1',
      [new Ingredient('maize flour', 2), 
      new Ingredient('eggs', 6)]
    ),
  ];

  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
