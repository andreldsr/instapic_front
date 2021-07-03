import { PhotoService } from '../photo/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'ol-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  userName: string = '';
  currentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
    })
  }

  loadMore(): void {
    this.filter = '';
    this.photoService.getPhotosByUsernamePaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });

  }

}
