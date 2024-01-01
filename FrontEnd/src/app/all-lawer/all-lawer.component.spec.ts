import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLawerComponent } from './all-lawer.component';

describe('AllLawerComponent', () => {
  let component: AllLawerComponent;
  let fixture: ComponentFixture<AllLawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllLawerComponent]
    });
    fixture = TestBed.createComponent(AllLawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
