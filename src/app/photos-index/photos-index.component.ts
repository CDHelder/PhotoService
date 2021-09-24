import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../Services/photo.service';
import { Photo } from '../Objects/Photo';

@Component({
  selector: 'app-photos-index',
  templateUrl: './photos-index.component.html',
  styleUrls: ['./photos-index.component.scss']
})
export class PhotosIndexComponent implements OnInit {
  
  photos : Photo[];

  constructor(photoService: PhotoService) {
    this.photos = photoService.getAllPhotos()
  }

  ngOnInit(): void {
  }

}
