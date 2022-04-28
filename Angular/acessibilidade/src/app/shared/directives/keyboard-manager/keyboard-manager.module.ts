import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { keyboardManagerItemDirective } from './keyboard-manager-item.directive';
import { keyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [
    keyboardManagerDirective, 
    keyboardManagerItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    keyboardManagerDirective, 
    keyboardManagerItemDirective
  ]
})
export class keyboardManagerModule {}