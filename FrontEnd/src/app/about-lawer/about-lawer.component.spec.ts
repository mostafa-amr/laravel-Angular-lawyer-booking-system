import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLawerComponent } from './about-lawer.component';

describe('AboutLawerComponent', () => {
  let component: AboutLawerComponent;
  let fixture: ComponentFixture<AboutLawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutLawerComponent]
    });
    fixture = TestBed.createComponent(AboutLawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
