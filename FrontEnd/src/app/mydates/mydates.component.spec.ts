import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydatesComponent } from './mydates.component';

describe('MydatesComponent', () => {
  let component: MydatesComponent;
  let fixture: ComponentFixture<MydatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydatesComponent]
    });
    fixture = TestBed.createComponent(MydatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
