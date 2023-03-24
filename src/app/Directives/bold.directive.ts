import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {
   constructor(){}
  // constructor( private element : ElementRef, private render: Renderer2) { 
  // //   // element.nativeElement.style.color ='red';
  // //   render.setStyle(element.nativeElement,"background",'red');
  // }
}
