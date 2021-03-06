import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionDirectiveModule } from '../../directives/action/action.module';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

const componentsDeclaredAndExported = [
  LikeWidgetComponent
]

@NgModule({
  declarations: [
    ... componentsDeclaredAndExported
  ],
  imports: [
    CommonModule, 
    FontAwesomeModule,
    ActionDirectiveModule
  ],
  exports: [
    ... componentsDeclaredAndExported
  ],
  providers: [
    UniqueIdService
  ]
})
export class LikeWidgetModule {}