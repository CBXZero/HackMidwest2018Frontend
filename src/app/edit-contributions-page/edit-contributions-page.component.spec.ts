import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContributionsPageComponent } from './edit-contributions-page.component';

describe('EditContributionsPageComponent', () => {
  let component: EditContributionsPageComponent;
  let fixture: ComponentFixture<EditContributionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContributionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContributionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
