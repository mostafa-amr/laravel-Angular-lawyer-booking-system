import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLawyerDeatailsComponent } from './create-lawyer-deatails.component';

describe('CreateLawyerDeatailsComponent', () => {
  let component: CreateLawyerDeatailsComponent;
  let fixture: ComponentFixture<CreateLawyerDeatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLawyerDeatailsComponent]
    });
    fixture = TestBed.createComponent(CreateLawyerDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
