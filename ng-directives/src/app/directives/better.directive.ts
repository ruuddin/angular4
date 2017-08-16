import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterDirective implements OnInit{
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

}