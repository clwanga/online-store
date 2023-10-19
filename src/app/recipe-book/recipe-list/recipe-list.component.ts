import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() clickedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Meat","Fried Meat Recipe", "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-1.jpg"),
    new Recipe("Chapati","Chapati with eggs fried together", "https://www.1mg.com/articles/wp-content/uploads/2020/06/desi-vegetable-oat-pancake.jpg")
  ];

  getCurrentItem(currentItem: Recipe){
    this.clickedRecipe.emit(currentItem);
  }
}
