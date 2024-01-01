import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcityEditComponent } from './acity-edit.component';

describe('AcityEditComponent', () => {
  let component: AcityEditComponent;
  let fixture: ComponentFixture<AcityEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcityEditComponent]
    });
    fixture = TestBed.createComponent(AcityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
