import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlPhotoComponent } from './ol-photo.component';

describe('OlPhotoComponent', () => {
  let component: OlPhotoComponent;
  let fixture: ComponentFixture<OlPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
