import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[maxLength]'
})
export class MaxLengthDirective {

  @Input('maxLength') maxLength;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef<HTMLInputElement>
  ) { }

  @HostListener('input') onChange(): void {
    let { value } = this.elementRef.nativeElement;
    console.log(`MaxLength Directive: ${value}`);

    if (this.maxLength && !!value) {
      value = value.length < this.maxLength ? value : value.slice(0, this.maxLength);
    }
    this.renderer2.setProperty(this.elementRef.nativeElement, 'value', value);
  }


}
