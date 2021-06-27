import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVideoComponent } from './save-video.component';

describe('SaveVideoComponent', () => {
  let component: SaveVideoComponent;
  let fixture: ComponentFixture<SaveVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
