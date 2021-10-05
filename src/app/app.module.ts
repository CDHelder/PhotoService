import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosIndexComponent } from './photos-index/photos-index.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoOnChangeComponent } from './photo-on-change/photo-on-change.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosIndexComponent,
    PhotoDetailComponent,
    PhotoComponent,
    PhotoOnChangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
