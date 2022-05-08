import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardService } from './services/photo-board.service';

const componentsDeclaredAndExported = [ PhotoBoardComponent ]

@NgModule({
  declarations: [
    ... componentsDeclaredAndExported
  ],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  exports: [
    ... componentsDeclaredAndExported
  ],
  providers: [
    PhotoBoardService
  ]
})
export class PhotoBoardModule {}