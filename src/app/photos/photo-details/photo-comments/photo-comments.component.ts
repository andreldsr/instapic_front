import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo.comment';
import { PhotoService } from '../../photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ol-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: string;
  comments$: Observable<PhotoComment[]>;
  commentForm: FormGroup;
  constructor(private photoService: PhotoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(300)]]
    });

  }

  sendComment() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService.sendComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }));
  }

}
