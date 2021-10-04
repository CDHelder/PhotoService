import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotosIndexComponent } from './photos-index/photos-index.component';

const routes: Routes = [
  {path: "" ,component: PhotosIndexComponent},
  {path: "Photo/:id", component: PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
