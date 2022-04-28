import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { keyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';



@NgModule({
  declarations: [
    YesNoButtonGroupComponent
  ],
  imports: [
    CommonModule,
    keyboardManagerModule
  ],
  exports: [
    YesNoButtonGroupComponent
  ]
})
export class YesNoButtonGroupModule { }
