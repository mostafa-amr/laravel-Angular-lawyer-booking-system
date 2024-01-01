import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcityCreateComponent } from './acity-create.component';

describe('AcityCreateComponent', () => {
  let component: AcityCreateComponent;
  let fixture: ComponentFixture<AcityCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcityCreateComponent]
    });
    fixture = TestBed.createComponent(AcityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
