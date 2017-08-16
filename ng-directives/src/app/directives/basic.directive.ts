import { Directive, ElementRef, OnInit } from '@angular/core';

//Custom directive to override the backgroundColor of the element.
@Directive({
   selector: '[appBasicHighlight]'
})
export class BasicDirective implements OnInit{
   constructor(private element: ElementRef) {
       element.nativeElement
   }

   ngOnInit() {
       this.element.nativeElement.style.backgroundColor = 'green';
   }
}