import { Injectable } from '@angular/core';
import { Photo } from '../Objects/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  photo1 : Photo = {id: 1, albumId: 1, thumbnailUrl: "photo1thumbnailUrl-1", url: "url-1", title:"TitleOfPhoto1"};
  photo2 : Photo = {id: 2, albumId: 1, thumbnailUrl: "photo2thumbnailUrl-2", url: "url-2", title:"TitleOfPhoto2"};
  photo3 : Photo = {id: 3, albumId: 1, thumbnailUrl: "photo3thumbnailUrl-3", url: "url-3", title:"TitleOfPhoto3"};

  pothos : Photo[] = new Array(this.photo1,this.photo2,this.photo3);

  constructor() {
   }

  getAllPhotos() : any
  {
    return this.pothos;
  }
}
