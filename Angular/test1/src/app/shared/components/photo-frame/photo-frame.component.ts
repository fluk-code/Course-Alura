import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.components.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Input() public description!: string;
  @Input() public src!: string;

  @Input() public likes = 0;
  @Output() public liked: EventEmitter<void> = new EventEmitter();

  private _debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  public like(): void {
    this._debounceSubject.next();
  }  

  public ngOnInit(): void {
    this._debounceSubject
      .asObservable()
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => this.liked.emit());
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}