import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'ol-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;
  constructor(private userService: UserService, private router: Router) {
    this.user$ = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
