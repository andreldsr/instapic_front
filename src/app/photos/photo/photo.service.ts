import { PhotoComment } from './photo.comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../photo';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';


const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotosByUsername(username: string) {
    return this.http.get<Photo[]>(`${API}/${username}/photos`);
  }

  getPhotosByUsernamePaginated(username: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());
    return this.http.get<Photo[]>(`${API}/${username}/photos`, { params });
  }

  upload(description: any, allowComments: any, photoFile: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', photoFile);
    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  findById(photoId: string): Observable<Photo> {
    return this.http.get<Photo>(`${API}/photos/${photoId}`);
  }

  getComments(photoId: string) {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  sendComment(photoId: string, commentText: string) {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  delete(photoId: string) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  like(photoId: string) {
    return this.http.post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status === 304 ? of(false) : throwError(err);
      }));
  }

}
