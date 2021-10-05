import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { PhotoService } from '../Services/photo.service';
import { Photo } from '../Objects/Photo';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-index',
  templateUrl: './photos-index.component.html',
  styleUrls: ['./photos-index.component.scss']
})
export class PhotosIndexComponent implements OnInit {
  
  photos: Photo[] = [];
  subscription!: Subscription;
  show: Boolean = false;
  showphotoid!: number;

  constructor(private photoService: PhotoService, private router: Router, private eRef: ElementRef) {
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy");

    if(this.subscription)
      this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.subscription = this.photoService.getAllPhotos().subscribe(x => this.photos = x.slice(0,50))
    this.show = false;
    console.log("Getting Photos");
  }

  onClick(id : number){
    this.photoService.getId(id, true)
    this.router.navigate(['/Photo', id])
  }

  showImg(id: number) {
    console.log("show == false show image id: ", id)
    this.showphotoid = id;
    this.photoService.getId(id, false);
    this.show = true;
  }
}
