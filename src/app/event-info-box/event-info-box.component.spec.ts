import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoBoxComponent } from './event-info-box.component';

describe('EventInfoBoxComponent', () => {
  let component: EventInfoBoxComponent;
  let fixture: ComponentFixture<EventInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
