import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCompetitionComponent } from './new-competition.component';
import {MatSliderModule} from '@angular/material/slider';

describe('NewCompetitionComponent', () => {
  let component: NewCompetitionComponent;
  let fixture: ComponentFixture<NewCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompetitionComponent ],
      imports: [MatSliderModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
