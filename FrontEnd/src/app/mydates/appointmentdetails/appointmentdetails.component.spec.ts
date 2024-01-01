import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdetailsComponent } from './appointmentdetails.component';

describe('AppointmentdetailsComponent', () => {
  let component: AppointmentdetailsComponent;
  let fixture: ComponentFixture<AppointmentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentdetailsComponent]
    });
    fixture = TestBed.createComponent(AppointmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
