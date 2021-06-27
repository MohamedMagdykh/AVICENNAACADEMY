import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPForgettPassComponent } from './tempforgett-pass.component';

describe('TEMPForgettPassComponent', () => {
  let component: TEMPForgettPassComponent;
  let fixture: ComponentFixture<TEMPForgettPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TEMPForgettPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TEMPForgettPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
