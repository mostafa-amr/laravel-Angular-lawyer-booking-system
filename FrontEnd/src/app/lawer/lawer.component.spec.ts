import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawerComponent } from './lawer.component';

describe('LawerComponent', () => {
  let component: LawerComponent;
  let fixture: ComponentFixture<LawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawerComponent]
    });
    fixture = TestBed.createComponent(LawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
