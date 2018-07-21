import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGuestPageComponent } from './invite-guest-page.component';

describe('InviteGuestPageComponent', () => {
  let component: InviteGuestPageComponent;
  let fixture: ComponentFixture<InviteGuestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteGuestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteGuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
