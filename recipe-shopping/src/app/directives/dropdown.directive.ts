import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
//adds css class to an element on which this directive is placed
export class DropdownDirective {

  //add open' to the class property
  @HostBinding('class.open') isOpen = false;

  //listen for click event on the element
  @HostListener('click') toggleOpen() {
    console.log("clicked");
    this.isOpen = !this.isOpen;
  }
  constructor(private element: ElementRef, private renderer: Renderer2) { }

}
