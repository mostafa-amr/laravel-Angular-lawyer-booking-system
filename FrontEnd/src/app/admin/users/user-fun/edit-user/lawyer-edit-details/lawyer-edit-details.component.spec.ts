import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerEditDetailsComponent } from './lawyer-edit-details.component';

describe('LawyerEditDetailsComponent', () => {
  let component: LawyerEditDetailsComponent;
  let fixture: ComponentFixture<LawyerEditDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawyerEditDetailsComponent]
    });
    fixture = TestBed.createComponent(LawyerEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
