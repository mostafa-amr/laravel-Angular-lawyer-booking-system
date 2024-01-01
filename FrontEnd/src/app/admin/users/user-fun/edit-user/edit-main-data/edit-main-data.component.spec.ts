import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainDataComponent } from './edit-main-data.component';

describe('EditMainDataComponent', () => {
  let component: EditMainDataComponent;
  let fixture: ComponentFixture<EditMainDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMainDataComponent]
    });
    fixture = TestBed.createComponent(EditMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
