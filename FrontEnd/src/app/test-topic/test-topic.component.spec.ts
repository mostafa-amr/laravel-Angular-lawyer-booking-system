import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopicComponent } from './test-topic.component';

describe('TestTopicComponent', () => {
  let component: TestTopicComponent;
  let fixture: ComponentFixture<TestTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTopicComponent]
    });
    fixture = TestBed.createComponent(TestTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
