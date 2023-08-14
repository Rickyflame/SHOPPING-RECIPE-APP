import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a path', 'https://w7.pngwing.com/pngs/426/730/png-transparent-logo-yellow-font-recipe-logo-art-yellow.png'),
    new Recipe('Another test recipe', 'This is simply a path', 'https://w7.pngwing.com/pngs/873/295/png-transparent-speech-language-pathology-android-recipe-android.png')

  ];

  constructor() {}

  ngOninit() {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
