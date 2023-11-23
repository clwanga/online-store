import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @Input() defaultColor:string = "transparent";
  @Input() highlightColor:string = "green";

  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "blue");
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, "backgroundColor", "yellow");
    this.bgColor = this.defaultColor;
  }

}
