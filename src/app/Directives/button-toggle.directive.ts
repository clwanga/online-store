import { 
  Directive, 
  HostBinding, 
  HostListener 
} from '@angular/core';

@Directive({
  selector: '[appButtonToggle]'
})
export class ButtonToggleDirective {
  @HostBinding('class.open') setClass: boolean = false;

  @HostListener('click') onClick(eventData: Event){
    this.setClass = !this.setClass;
  }

  constructor() { }

}
