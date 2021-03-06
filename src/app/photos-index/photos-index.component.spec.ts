import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosIndexComponent } from './photos-index.component';

describe('PhotosIndexComponent', () => {
  let component: PhotosIndexComponent;
  let fixture: ComponentFixture<PhotosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
