import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Photo } from '../Objects/Photo';
import { BehaviorSubject, Observable } from 'rxjs';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private idSource = new BehaviorSubject(0);
  chosenId = this.idSource.asObservable();

  private boolSource = new BehaviorSubject(false);
  changeBool = this.boolSource.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
    this.chosenId = this.idSource.asObservable();
    this.changeBool = this.boolSource.asObservable();
  }

  getAllPhotos() : Observable<Photo[]>
  {
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
  }

  getPhotoById(id: number) : Observable<Photo> {
    return this.getAllPhotos().pipe(map(x => x.find(p => p.id === id)!))
  }

  getId(id:number, bool:Boolean){
    console.log("getting id:", id)
    this.idSource.next(id)
  }
}
