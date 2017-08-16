import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //Hostbinding: which property of the hosting element do we want to bind
  @HostBinding('style.backgroundColor') backgroundColor: string;
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }


  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}