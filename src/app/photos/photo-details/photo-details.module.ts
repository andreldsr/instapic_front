import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { OwnerOnlyDirective } from './owner-only/owner-only.directive';
import { OnlyLoggedModule } from 'src/app/shared/directives/only-logged/only-logged.module';



@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent, OwnerOnlyDirective],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    OnlyLoggedModule,
    ReactiveFormsModule,
  ],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
