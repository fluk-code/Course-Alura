import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeWidgetModule } from '../like-widget/like-widget.module';
import { PhotoFrameComponent } from './photo-frame.component';

const componentsDeclaredAndExported = [ PhotoFrameComponent ]

@NgModule({
  declarations: [ ...componentsDeclaredAndExported ],
  imports: [ 
    CommonModule,
    LikeWidgetModule 
  ],
  exports: [ ...componentsDeclaredAndExported ]
})
export class PhotoFrameModule {}