import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPollComponent } from './item-poll.component';

describe('ItemPollComponent', () => {
  let component: ItemPollComponent;
  let fixture: ComponentFixture<ItemPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
