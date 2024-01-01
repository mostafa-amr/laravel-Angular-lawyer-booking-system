import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspecializationsCreateComponent } from './aspecializations-create.component';

describe('AspecializationsCreateComponent', () => {
  let component: AspecializationsCreateComponent;
  let fixture: ComponentFixture<AspecializationsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspecializationsCreateComponent]
    });
    fixture = TestBed.createComponent(AspecializationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
