import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLawersReservationComponent } from './one-lawers-reservation.component';

describe('OneLawersReservationComponent', () => {
  let component: OneLawersReservationComponent;
  let fixture: ComponentFixture<OneLawersReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneLawersReservationComponent]
    });
    fixture = TestBed.createComponent(OneLawersReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
