import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  erro = '';
  @ViewChild('loginFormInput') loginFormInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.loginFormInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(userName, password)
      .subscribe(() => {
        this.router.navigate(['user', userName]);
      },
        err => {
          console.log(err);
          this.erro = 'Usuário ou senha inválido';
          this.platformDetectorService.isPlatformBrowser() &&
            this.loginFormInput.nativeElement.focus();
          this.loginForm.reset();
        });
  }

}
