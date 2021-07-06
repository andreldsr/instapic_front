import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from './../token/token.service';
import { User } from './user';
import { UserForm } from 'src/app/home/signup/user.form';
import { environment } from './../../../environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userSubject = new BehaviorSubject<User>(null);
  userName: string = '';
  constructor(private tokenService: TokenService, private http: HttpClient) {
    tokenService.hasToken() && this.setUserAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.setUserAndNotify();
  }

  private setUserAndNotify() {
    const user = jwt_decode(this.tokenService.getToken()) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  isLogged() {
    return !!this.tokenService.hasToken();
  }

  getUsername() {
    return this.userName;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  signUp(userForm: UserForm) {
    return this.http.post(`${API_URL}/user/signup`, userForm)
  }
}
