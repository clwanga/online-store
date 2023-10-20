import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredients[] = [
    new Ingredients("Apple", 3),
    new Ingredients("Tomato", 5)
  ];

  ReceiveName:string;
  ReceivedAmount:number;

  constructor(){}

  populateIngredientsArray(ingredient: Ingredients): void{
    this.ingredients.push(new Ingredients(ingredient.name,ingredient.amount));
  }
}
