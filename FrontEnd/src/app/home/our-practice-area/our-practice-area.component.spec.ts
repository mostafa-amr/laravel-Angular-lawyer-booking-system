import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPracticeAreaComponent } from './our-practice-area.component';

describe('OurPracticeAreaComponent', () => {
  let component: OurPracticeAreaComponent;
  let fixture: ComponentFixture<OurPracticeAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPracticeAreaComponent]
    });
    fixture = TestBed.createComponent(OurPracticeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
