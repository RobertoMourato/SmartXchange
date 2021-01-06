import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPageListComponent } from './market-page-list.component';

describe('MarketPageListComponent', () => {
  let component: MarketPageListComponent;
  let fixture: ComponentFixture<MarketPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
