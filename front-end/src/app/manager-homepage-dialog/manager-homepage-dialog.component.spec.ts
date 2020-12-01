import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomepageDialogComponent } from './manager-homepage-dialog.component';

describe('ManagerHomepageDialogComponent', () => {
  let component: ManagerHomepageDialogComponent;
  let fixture: ComponentFixture<ManagerHomepageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomepageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomepageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
