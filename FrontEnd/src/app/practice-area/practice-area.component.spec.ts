import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaComponent } from './practice-area.component';

describe('PracticeAreaComponent', () => {
  let component: PracticeAreaComponent;
  let fixture: ComponentFixture<PracticeAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeAreaComponent]
    });
    fixture = TestBed.createComponent(PracticeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
