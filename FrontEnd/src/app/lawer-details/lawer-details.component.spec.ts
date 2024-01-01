import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawerDetailsComponent } from './lawer-details.component';

describe('LawerDetailsComponent', () => {
  let component: LawerDetailsComponent;
  let fixture: ComponentFixture<LawerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawerDetailsComponent]
    });
    fixture = TestBed.createComponent(LawerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
