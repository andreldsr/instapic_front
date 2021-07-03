import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlPhotoComponent } from './ol-photo.component';



@NgModule({
  declarations: [OlPhotoComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [OlPhotoComponent]
})
export class PhotoModule { }
