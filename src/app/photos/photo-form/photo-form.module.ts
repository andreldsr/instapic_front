import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormErrorModule } from './../../shared/components/form-error/form-error.module';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';



@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    VmessageModule,
    RouterModule,
    FormErrorModule,
    PhotoModule,
    ReactiveFormsModule,
    ImmediateClickModule
  ],
  exports: [PhotoFormComponent]
})
export class PhotoFormModule { }
