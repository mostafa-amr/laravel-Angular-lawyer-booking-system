import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseLikeYoursComponent } from './case-like-yours.component';

describe('CaseLikeYoursComponent', () => {
  let component: CaseLikeYoursComponent;
  let fixture: ComponentFixture<CaseLikeYoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseLikeYoursComponent]
    });
    fixture = TestBed.createComponent(CaseLikeYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
