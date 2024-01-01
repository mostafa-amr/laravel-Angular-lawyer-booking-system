import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyroupComponent } from './myroup.component';

describe('MyroupComponent', () => {
  let component: MyroupComponent;
  let fixture: ComponentFixture<MyroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyroupComponent]
    });
    fixture = TestBed.createComponent(MyroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
