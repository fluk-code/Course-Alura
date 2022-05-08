import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardService {

  private readonly _endPointUrl = `${environment.API_URL}/photos`

  constructor (
    private readonly _httpClient: HttpClient
  ) {}

  public getPhotos(): Observable<Photo[]> {
    return this._httpClient
      .get<Photo[]>(this._endPointUrl)
      .pipe(
        map(photos => {
          return photos.map(photo => {
            return {
              ...photo,
              description: photo.description.toUpperCase()
            }
          })
        }),
        tap(console.log),
        delay(2000)
      );
  }
}