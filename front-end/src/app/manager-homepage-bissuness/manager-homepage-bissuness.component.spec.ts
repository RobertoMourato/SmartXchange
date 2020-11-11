import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageBissunessComponent } from './manager-homepage-bissuness.component';

describe('ManagerHomepageBissunessComponent', () => {
  let component: ManagerHomepageBissunessComponent;
  let fixture: ComponentFixture<ManagerHomepageBissunessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomepageBissunessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageBissunessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
