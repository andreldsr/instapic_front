import { map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.router.events
      .pipe(map(event => { event instanceof NavigationEnd }))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(data => {
        this.title.setTitle(data.title)
      })
  }
}
