import { Photo } from './photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photoList: Photo[], description: string): Photo[] {
    description = description.trim().toLowerCase();
    if (!description)
      return photoList;
    return photoList.filter(photo => photo.description.toLowerCase().includes(description));
  }

}
