import { Component, OnInit } from '@angular/core';
import { Photo } from '../Objects/Photo';
import { PhotoService } from '../Services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: Photo = {} as Photo;
  id!: number;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.chosenId.subscribe(x => this.id = x)
    this.photoService.getPhotoById(this.id).subscribe(y => this.photo = y)
  }
}
