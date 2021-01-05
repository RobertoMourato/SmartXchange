import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperadminManagerListComponent } from './superadmin-manager-list.component';

describe('SuperadminManagerListComponent', () => {
  let component: SuperadminManagerListComponent;
  let fixture: ComponentFixture<SuperadminManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminManagerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
