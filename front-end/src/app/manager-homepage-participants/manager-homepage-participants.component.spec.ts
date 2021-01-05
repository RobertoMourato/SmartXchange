import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageParticipantsComponent } from './manager-homepage-participants.component';

describe('ManagerHomepageParticipantsComponent', () => {
  let component: ManagerHomepageParticipantsComponent;
  let fixture: ComponentFixture<ManagerHomepageParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomepageParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
