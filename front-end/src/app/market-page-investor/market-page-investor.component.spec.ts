import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPageInvestorComponent } from './market-page-investor.component';

describe('MarketPageInvestorComponent', () => {
  let component: MarketPageInvestorComponent;
  let fixture: ComponentFixture<MarketPageInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPageInvestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPageInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
