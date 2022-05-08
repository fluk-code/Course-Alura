import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent>;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    })

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  })

  describe('Component', () => {
    it('Should create component', () => {
      expect(component).toBeTruthy()
    })
  
    it('(DOM) Should display number of likes whe (@Input likes) is incremented', () => {
      fixture.detectChanges();
  
      component.likes++;
      expect(component.likes).toBe(1);
  
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      
      expect(element?.textContent?.trim()).toBe('1');
    });

    it('(DOM) Should display image with src and description likes bound to properties', () => {
      const src = 'any-src';
      const description = 'any-description';
      
      component.src = src; 
      component.description = description;
  
      fixture.detectChanges();
      const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
      
      expect(img.getAttribute('src')).toBe(src);
      expect(img.getAttribute('alt')).toBe(description);
    });
  });

  describe('Accessibility', () => {
    it('(DOM) Should update aria-label when (@Input Likes) is incremented', () => {
      fixture.detectChanges();
      component.likes++;

      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement.querySelector('span');
      expect(element.getAttribute('aria-label')).toBe('1: people liked');
    });

    it('(DOM) Should have aria-label with 0 when (@Input Likes)', () => {
      fixture.detectChanges();
      const element: HTMLElement = fixture.nativeElement.querySelector('span');
      expect(element.getAttribute('aria-label')).toBe('0: people liked');
    });
  })

  describe(`#${PhotoFrameComponent.prototype.like.name}`, () => {
    it('Should trigger (@Output liked) once when called multiple times within debounce time', fakeAsync (() => {
      fixture.detectChanges();
      const debounceTime = 500;

      let times = 0;
      component.liked.subscribe(() => times++);
      component.like();
      component.like();
      tick(debounceTime);

      expect(times).toBe(1)
    }));

    it('Should trigger (@Output liked) two times when called outside debounce time', fakeAsync (() => {
      fixture.detectChanges();
      const debounceTime = 500;

      let times = 0;
      component.liked.subscribe(() => times++);

      component.like();
      tick(debounceTime);
      component.like();
      tick(debounceTime);

      expect(times).toBe(2)
    }));
  });

});
