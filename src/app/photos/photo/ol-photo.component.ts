import { Component, Input } from '@angular/core';
import { environment } from './../../../environments/environment';

const API_URL = environment.API_URL;

@Component({
  selector: 'ol-photo',
  templateUrl: './ol-photo.component.html',
  styleUrls: ['./ol-photo.component.css']
})
export class OlPhotoComponent {

  private _url: string = '';
  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = `${API_URL}/imgs/${url}`;
    } else {
      this._url = url;
    }
  };
  @Input() alt = '';

  get url() {
    return this._url
  }

}
