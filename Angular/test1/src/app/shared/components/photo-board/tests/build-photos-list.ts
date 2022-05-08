import { Photo } from '../interfaces/photo';

export function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];

  for( let index = 0; index < 8 ; index++) {
    photos.push({
      id: index + 1,
      url: 'any_url_' + index,
      description: 'any_description_' + index
    })
  }
  return photos;
}
