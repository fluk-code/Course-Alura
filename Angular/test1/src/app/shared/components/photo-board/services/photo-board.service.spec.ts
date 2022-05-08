import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PhotoBoardService } from './photo-board.service'

const mockData = {
  api: 'http://localhost:3000/photos',
  data:[ 
    {
      id: 1,
      description: 'any description 1',
      src: ''
    },{
      id: 2,
      description: 'any description 2',
      src: ''
    }
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PhotoBoardService]
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  describe(`#${PhotoBoardService.prototype.getPhotos.name}`, () => {
    it('Should return photos with description when uppercase', (done) => {
      service.getPhotos().subscribe(
        photos => {
          photos.forEach(photo => {
            expect(photo.description).toEqual(photo.description.toUpperCase());
          });
          done();
        }
      );

      httpController
      .expectOne(mockData.api)
      .flush(mockData.data);
    });
  });
});
