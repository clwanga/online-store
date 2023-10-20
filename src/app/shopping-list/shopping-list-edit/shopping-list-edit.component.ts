import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild("ItemName") Name: ElementRef
  @ViewChild("ItemAmount") Amount: ElementRef

  //output variables
  @Output() valuesObtained = new EventEmitter<Ingredients>();


  //method
  AddItem(){
    let ingName = this.Name.nativeElement.value;
    let ingAmount = this.Amount.nativeElement.value;

    var ingredient = new Ingredients(ingName, ingAmount);
    this.valuesObtained.emit(ingredient);
    
  }
}
