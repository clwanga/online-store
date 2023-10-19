import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild("ItemName") Name: ElementRef
  @ViewChild("ItemAmount") Amount: ElementRef

  //output variables
  @Output() nameObtained = new EventEmitter<string>();
  @Output() amountObtained = new EventEmitter<string>();

  //method
  AddItem(){
    this.nameObtained.emit(this.Name.nativeElement.value);
    this.amountObtained.emit(this.Amount.nativeElement.value);
  }
}
