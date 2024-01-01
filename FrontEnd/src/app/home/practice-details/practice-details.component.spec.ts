import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDetailsComponent } from './practice-details.component';

describe('PracticeDetailsComponent', () => {
  let component: PracticeDetailsComponent;
  let fixture: ComponentFixture<PracticeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeDetailsComponent]
    });
    fixture = TestBed.createComponent(PracticeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
