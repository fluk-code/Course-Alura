import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@ Input id) is NOT assigned', () => {    
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@ Input id) is assigned', () => {
    const anyId = 'any-id';
    component.id = anyId;
    
    fixture.detectChanges();
    expect(component.id).toBe(anyId);
  });

  // it('(DOM) Should display number of likes when clicked', (done) => {
  //   fixture.detectChanges();
    
  //   component.liked.subscribe(() => {
  //     component.likes++;
  //     fixture.detectChanges();
    
  //     const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
  //     expect(counterEl.textContent?.trim()).toBe('1');
    
  //     done();
  //   });
    
  //   const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget__container');
  //   likeWidgetContainerEl.click();
  // });

  // it('(DOM) Should display number of likes when ENTER key is pressed', (done) => {
  //   fixture.detectChanges();
    
  //   component.likeds.subscribe(() => {
  //     component.likes++;
  //     fixture.detectChanges();
    
  //     const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
  //     expect(counterEl.textContent?.trim()).toBe('1');
    
  //     done();
  //   });
    
  //   const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget__container');

  //   const event = new KeyboardEvent('keyup', { key: 'Enter' })
  //   likeWidgetContainerEl.dispatchEvent(event);
  // });

  describe(`#${LikeWidgetComponent.prototype.like.name}`, () => {
    it('Should trigger (@Output liked) when called', () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    })
  })
})

