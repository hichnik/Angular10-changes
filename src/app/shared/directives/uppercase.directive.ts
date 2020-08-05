import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UppercaseDirective {

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef<HTMLInputElement>
  ) { }

  @HostListener('input') OnChange(): void {
    const { value } = this.elementRef.nativeElement;
    console.log(`Uppercase directive: ${value}`);
    this.renderer2.setProperty(this.elementRef.nativeElement, 'value', value.toUpperCase());
  }

}
