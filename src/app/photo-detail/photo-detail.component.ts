import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Photo } from '../Objects/Photo';
import { PhotoService } from '../Services/photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  idSubscribe!: Subscription;
  visibleSubscribe!: Subscription;
  photoSubscribe!: Subscription;

  visible: boolean = false;
  id: number = 0;
  photo: Photo = {} as Photo;

  constructor(private photoService: PhotoService, private router: Router) {

  }

  ngOnInit(): void {
    this.photoService.chosenId.subscribe(x => this.id = x)
    this.photoService.changeBool.subscribe(x => this.visible = x)
    this.photoService.getPhotoById(this.id).subscribe(y => this.photo = y)
  }

  onClick() {
    this.photoService.getId(this.photo.id, false)
    this.router.navigateByUrl('');
  }
}
