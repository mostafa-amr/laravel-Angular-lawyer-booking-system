import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlawyerDetailsComponent } from './alawyer-details.component';

describe('AlawyerDetailsComponent', () => {
  let component: AlawyerDetailsComponent;
  let fixture: ComponentFixture<AlawyerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlawyerDetailsComponent]
    });
    fixture = TestBed.createComponent(AlawyerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
