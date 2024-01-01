import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitforverifiyComponent } from './waitforverifiy.component';

describe('WaitforverifiyComponent', () => {
  let component: WaitforverifiyComponent;
  let fixture: ComponentFixture<WaitforverifiyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaitforverifiyComponent]
    });
    fixture = TestBed.createComponent(WaitforverifiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
