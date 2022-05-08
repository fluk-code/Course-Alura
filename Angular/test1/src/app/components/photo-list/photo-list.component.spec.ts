import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/tests/build-photos-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {
  let fixture : ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let photoBoardService: PhotoBoardService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoBoardService = TestBed.inject(PhotoBoardService);
  });

  describe('Component', () => {
    it('Should create component', () => {
      expect(component).toBeTruthy();
    });

    it('(DOM) Should display board when data arrives', () => {
      const photos = buildPhotoList();
      spyOn(photoBoardService, 'getPhotos')
        .and.returnValue(of(photos));

      fixture.detectChanges();

      const board = fixture.nativeElement.querySelector('app-photo-board');
      const loader = fixture.nativeElement.querySelector('loader');

      expect(board)
        .withContext('Should display board')
        .not.toBeNull();
      expect(loader)
        .withContext('Should not display loader')
        .toBeNull();
    });

    it('(DOM) Should display loader while waiting for data', () => {
      const photos = buildPhotoList();
      spyOn(photoBoardService, 'getPhotos')
        .and.returnValue(undefined as unknown as Observable<Photo[]>);

      fixture.detectChanges();

      const board = fixture.nativeElement.querySelector('app-photo-board');
      const loader = fixture.nativeElement.querySelector('.loader');

      expect(board)
        .withContext('Should not display board')
        .toBeNull();
      expect(loader)
        .withContext('Should display loader')
        .not.toBeNull();
    });
  });
})
