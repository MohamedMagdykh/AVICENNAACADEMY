import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSideBarComponent } from './instructor-side-bar.component';

describe('InstructorSideBarComponent', () => {
  let component: InstructorSideBarComponent;
  let fixture: ComponentFixture<InstructorSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
