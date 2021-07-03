import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo';
import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    constructor(private photoService: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.photoService.getPhotosByUsernamePaginated(userName, 1);
    }

}
