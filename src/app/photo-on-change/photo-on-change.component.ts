import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Photo } from '../Objects/Photo';
import { PhotoService } from '../Services/photo.service';

@Component({
  selector: 'app-photo-on-change',
  templateUrl: './photo-on-change.component.html',
  styleUrls: ['./photo-on-change.component.scss']
})
export class PhotoOnChangeComponent implements OnChanges {

  photo: Photo = {} as Photo;
  @Input() id!: number;

  constructor(private photoService: PhotoService) { }

  ngOnChanges(): void {
    this.photoService.chosenId.subscribe(x => this.id = x)  
    this.photoService.getPhotoById(this.id).subscribe(y => this.photo = y)

    //this.employeeService.deleteEmployee(id).subscribe((data) =>{this.ngOnInit();})
  }

}
