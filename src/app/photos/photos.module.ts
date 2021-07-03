import { RouterModule } from '@angular/router';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoDetailsModule,
    RouterModule,
  ]
})
export class PhotosModule { }
