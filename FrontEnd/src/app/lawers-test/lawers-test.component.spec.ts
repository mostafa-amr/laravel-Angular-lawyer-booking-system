import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawersTestComponent } from './lawers-test.component';

describe('LawersTestComponent', () => {
  let component: LawersTestComponent;
  let fixture: ComponentFixture<LawersTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawersTestComponent]
    });
    fixture = TestBed.createComponent(LawersTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
