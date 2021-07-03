import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[olDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';
  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`)
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.element.nativeElement, 'filter', `brightness(100%)`)
  }
}
