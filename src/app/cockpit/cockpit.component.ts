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

  @ViewChild("serverName",{static: true}) serverName: ElementRef;
  @ViewChild("serverContent",{static:true}) serverContent: ElementRef;
  
  //methods
  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(contentInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
