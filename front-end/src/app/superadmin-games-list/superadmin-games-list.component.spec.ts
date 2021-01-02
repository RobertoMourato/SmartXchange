import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminGamesListComponent } from './superadmin-games-list.component';

describe('SuperadminGamesListComponent', () => {
  let component: SuperadminGamesListComponent;
  let fixture: ComponentFixture<SuperadminGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
