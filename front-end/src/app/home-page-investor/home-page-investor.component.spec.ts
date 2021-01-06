import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInvestorComponent } from './home-page-investor.component';

describe('HomePageInvestorComponent', () => {
  let component: HomePageInvestorComponent;
  let fixture: ComponentFixture<HomePageInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageInvestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
