import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlickerResponse } from './models/FlickerResponse';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

  constructor(private http: HttpClient) { }

  getPhotosFromFlicker(): Observable<FlickerResponse> {
    return this.http.get<FlickerResponse>(this.flickerUrl);
  }

}
