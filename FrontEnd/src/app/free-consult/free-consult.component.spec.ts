import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeConsultComponent } from './free-consult.component';

describe('FreeConsultComponent', () => {
  let component: FreeConsultComponent;
  let fixture: ComponentFixture<FreeConsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeConsultComponent]
    });
    fixture = TestBed.createComponent(FreeConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
