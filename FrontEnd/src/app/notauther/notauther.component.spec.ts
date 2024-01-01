import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotautherComponent } from './notauther.component';

describe('NotautherComponent', () => {
  let component: NotautherComponent;
  let fixture: ComponentFixture<NotautherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotautherComponent]
    });
    fixture = TestBed.createComponent(NotautherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
