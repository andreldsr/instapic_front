import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ol-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  preview: string;
  photoFile: File;
  photoForm: FormGroup;
  progress: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      photo: ['', Validators.required],
      description: ['', Validators.required, Validators.maxLength(300)],
      allowComments: ['true', Validators.required]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService.upload(description, allowComments, this.photoFile)
      .pipe(finalize(() => this.router.navigate(['user', this.userService.getUsername()])))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type == HttpEventType.Response) {
          this.alertService.success('Upload succesful', true)
        }
      },
        err => {
          this.alertService.danger('Upload Error', true)
        })
  }

  handlePhoto(photo: File) {
    this.photoFile = photo;
    const reader = new FileReader();
    reader.onload = (event: any) => { this.preview = event.target.result }
    reader.readAsDataURL(this.photoFile);

  }

}
