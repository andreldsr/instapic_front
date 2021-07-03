import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ol-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() value: string = '';
  @Output() onType = new EventEmitter<string>();

  debounce: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onType.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  mudou() {
    console.log('mudou')
  }

}
