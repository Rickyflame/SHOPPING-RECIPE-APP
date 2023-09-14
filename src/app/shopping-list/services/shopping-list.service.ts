import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';


export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Apples", 10),
  ]

  constructor() { }

  getIngredients(){
    return this.ingredients.slice() 
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
