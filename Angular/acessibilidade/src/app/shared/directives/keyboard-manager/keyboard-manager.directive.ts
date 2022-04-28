import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';

import { keyboardManagerItemDirective } from './keyboard-manager-item.directive';

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 0
}

@Directive({
  selector: '[keyboard-manager]'
})
export class keyboardManagerDirective {

  @ContentChildren(keyboardManagerItemDirective) public items!: QueryList<keyboardManagerItemDirective>;

  @HostListener('keyup', ['$event'])
  public mangerKeys(event: KeyboardEvent) {    
    switch (event.key) {
      case 'ArrowUp': 
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown': 
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft': 
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight': 
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): keyboardManagerItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex(item => item.isFocused());

    const targetElementFocus = items[currentSelectedIndex + direction];
    console.log(currentSelectedIndex + direction)

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
  }
}