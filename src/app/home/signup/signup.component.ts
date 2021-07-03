import { AuthService } from './../../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case-validator/lower-case.validator';
import { UserForm } from './user.form';
import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { UserService } from './../../core/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  error: string = '';
  signUpForm: FormGroup;
  @ViewChild('emailFormInput') emailFormInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), lowerCaseValidator]],
      fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailFormInput.nativeElement.focus();
  }

  signUp() {
    const userForm = this.signUpForm.getRawValue() as UserForm;
    this.userService.signUp(userForm)
      .subscribe(_ => {
        this.router.navigate([''])
      },
        err => {
          console.log(err)
          this.error = err.message
        });
  }

}
