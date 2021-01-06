import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerPopupComponent } from './create-manager-popup.component';

describe('CreateManagerPopupComponent', () => {
  let component: CreateManagerPopupComponent;
  let fixture: ComponentFixture<CreateManagerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateManagerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
