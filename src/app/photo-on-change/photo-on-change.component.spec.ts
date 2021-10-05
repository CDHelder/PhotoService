import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOnChangeComponent } from './photo-on-change.component';

describe('PhotoOnChangeComponent', () => {
  let component: PhotoOnChangeComponent;
  let fixture: ComponentFixture<PhotoOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoOnChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
