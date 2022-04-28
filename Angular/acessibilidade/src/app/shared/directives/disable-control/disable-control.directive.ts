import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective implements OnChanges {

  @Input() public disableControl: boolean = false;

  constructor (
    private readonly _ngControl: NgControl
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.disableControl) {
      this.disableControl &&  this._ngControl.control?.disable();
      !this.disableControl &&  this._ngControl.control?.enable();
    }
  }
}