import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageCompetitionComponent } from './manager-homepage-competition.component';

describe('ManagerHomepageCompetitionComponent', () => {
  let component: ManagerHomepageCompetitionComponent;
  let fixture: ComponentFixture<ManagerHomepageCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ ManagerHomepageCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
