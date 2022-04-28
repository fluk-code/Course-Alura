import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[keyboard-manager-item]'
})
export class keyboardManagerItemDirective {

  @Output() public focused = new EventEmitter<void>();

  constructor (
    private readonly _elementRef: ElementRef<HTMLElement>
  ) {}

  public focus(): void {
    this._elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this._elementRef.nativeElement === document.activeElement;
  }
}