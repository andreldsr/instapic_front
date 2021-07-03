import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from './../photo/photo.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: string;
  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => { },
      err => {
        this.router.navigate(['not-found']);
      });
  }

  delete() {
    this.photoService.delete(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['user', this.userService.getUsername()]);
      },
        err => {
          this.alertService.danger('Cannot remove photo');
          console.log(err);
        });

  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      }, err => {
        this.alertService.danger(err.message);
      });
  }

}
