import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  //create an custom event property
  @Output() countValue = new EventEmitter<number>();

  counter = 0;
  intervalId;

  constructor(){}

  ngOnInit(){}

  startCount(){

    this.intervalId=  setInterval(this.incrementByOne, 1000);
  }

  stopCount(){
    clearInterval(this.intervalId);
  }

  incrementByOne() {
    
    //this.counter = this.counter + 1;
    console.log(this.counter);

    // this.countValue.emit(this.counter);
  }
}
