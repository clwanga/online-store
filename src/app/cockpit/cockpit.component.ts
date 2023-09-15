import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  //properties
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = "";
  // newServerContent = "";
  @ViewChild("serverContent",{static:true}) serverContent: ElementRef;
  
  //methods
  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(){
    // this.blueprintCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });
  }

}
