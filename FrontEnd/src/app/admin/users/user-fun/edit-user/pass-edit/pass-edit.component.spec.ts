import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassEditComponent } from './pass-edit.component';

describe('PassEditComponent', () => {
  let component: PassEditComponent;
  let fixture: ComponentFixture<PassEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassEditComponent]
    });
    fixture = TestBed.createComponent(PassEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
