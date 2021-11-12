import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.color = 'Green'
   }

}
