import { VmessageModule } from './../vmessage/vmessage.module';
import { VmessageComponent } from './../vmessage/vmessage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error.component';



@NgModule({
  declarations: [FormErrorComponent],
  imports: [
    CommonModule,
    VmessageModule
  ],
  exports: [FormErrorComponent]
})
export class FormErrorModule { }
