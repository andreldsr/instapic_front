import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { FormErrorModule } from './../shared/components/form-error/form-error.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule,
    FormErrorModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
