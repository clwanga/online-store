import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() valueClicked = new EventEmitter<string>();

  changeClicked(value:string){
    this.valueClicked.emit(value);
  }
}
