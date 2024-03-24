import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[RedElement]'
})
export class RedElementDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
