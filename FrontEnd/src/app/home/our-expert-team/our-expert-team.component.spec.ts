import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertTeamComponent } from './our-expert-team.component';

describe('OurExpertTeamComponent', () => {
  let component: OurExpertTeamComponent;
  let fixture: ComponentFixture<OurExpertTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurExpertTeamComponent]
    });
    fixture = TestBed.createComponent(OurExpertTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
