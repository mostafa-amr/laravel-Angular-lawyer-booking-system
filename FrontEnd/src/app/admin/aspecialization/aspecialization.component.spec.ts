import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspecializationComponent } from './aspecialization.component';

describe('AspecializationComponent', () => {
  let component: AspecializationComponent;
  let fixture: ComponentFixture<AspecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspecializationComponent]
    });
    fixture = TestBed.createComponent(AspecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
