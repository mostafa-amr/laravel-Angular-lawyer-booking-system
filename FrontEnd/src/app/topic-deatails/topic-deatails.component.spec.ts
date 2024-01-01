import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDeatailsComponent } from './topic-deatails.component';

describe('TopicDeatailsComponent', () => {
  let component: TopicDeatailsComponent;
  let fixture: ComponentFixture<TopicDeatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicDeatailsComponent]
    });
    fixture = TestBed.createComponent(TopicDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
