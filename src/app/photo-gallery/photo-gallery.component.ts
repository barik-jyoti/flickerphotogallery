import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { FlickerResponse } from '../models/FlickerResponse';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  flickerResponse: FlickerResponse;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickrService.getPhotosFromFlicker().subscribe( response => {
      this.flickerResponse = response;
    }, error => {
      console.log(error);
    });
  }

  onScroll() {
    this.flickrService.getPhotosFromFlicker().subscribe( response => {
      this.flickerResponse.items = this.flickerResponse.items.concat(response.items);
    }, error => {
      console.log(error);
    });
  }

}
