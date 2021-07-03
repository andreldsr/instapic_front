import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo';

@Component({
  selector: 'ol-photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.css']
})
export class PhotoRowComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: Photo[][] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos)
      this.buildRows();
  }

  buildRows() {
    this.rows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      this.rows.push(this.photos.slice(i, i + 3));
    }
  }

}
