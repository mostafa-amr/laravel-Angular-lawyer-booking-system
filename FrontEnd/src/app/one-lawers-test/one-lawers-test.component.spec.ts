import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLawersTestComponent } from './one-lawers-test.component';

describe('OneLawersTestComponent', () => {
  let component: OneLawersTestComponent;
  let fixture: ComponentFixture<OneLawersTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneLawersTestComponent]
    });
    fixture = TestBed.createComponent(OneLawersTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
