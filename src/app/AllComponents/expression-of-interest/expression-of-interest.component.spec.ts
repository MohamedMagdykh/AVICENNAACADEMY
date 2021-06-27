import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionOfInterestComponent } from './expression-of-interest.component';

describe('ExpressionOfInterestComponent', () => {
  let component: ExpressionOfInterestComponent;
  let fixture: ComponentFixture<ExpressionOfInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionOfInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
