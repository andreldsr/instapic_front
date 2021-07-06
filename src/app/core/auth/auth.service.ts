import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from './../../../environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(userName: string, password: string) {
    return this.http.post(`${API_URL}/user/login`, {
      userName,
      password
    }, { observe: 'response' })
      .pipe(tap(
        res => {
          console.log('response');
          console.log(res);
          const authToken = res.headers.get('X-Access-Token');
          console.log(authToken);
          this.userService.setToken(authToken);
        }
      ));
  }
}
