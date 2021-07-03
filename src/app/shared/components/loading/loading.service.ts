import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new Subject<LoadingType>();
  constructor() { }

  getLoading() {
    return this.loadingSubject.asObservable()
      .pipe(startWith(LoadingType.LOADING));
  }

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
