import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspecializationsEditComponent } from './aspecializations-edit.component';

describe('AspecializationsEditComponent', () => {
  let component: AspecializationsEditComponent;
  let fixture: ComponentFixture<AspecializationsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspecializationsEditComponent]
    });
    fixture = TestBed.createComponent(AspecializationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
