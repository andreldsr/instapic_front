import { Injectable } from '@angular/core';

const KEY = 'authToken'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  setToken(token: string): void {
    return window.localStorage.setItem(KEY, token);
  }

  removeToken(): void {
    return window.localStorage.removeItem(KEY);
  }
}
