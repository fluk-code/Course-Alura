import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';


const componentsDeclaredAndExported = [ PhotoListComponent ]

@NgModule({
  declarations: [
    ... componentsDeclaredAndExported
  ],
  imports: [ 
    CommonModule,
    FontAwesomeModule,
    PhotoBoardModule
  ],
  exports: [
    ... componentsDeclaredAndExported
  ],
})
export class PhotoListModule {}