import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageBusinessComponent } from './manager-homepage-business.component';

describe('ManagerHomepageBusinessComponent', () => {
  let component: ManagerHomepageBusinessComponent;
  let fixture: ComponentFixture<ManagerHomepageBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomepageBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
