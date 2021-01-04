import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MatRadioModule } from '@angular/material/radio';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { NewCompanyService } from '../new-company/new-company.service';
import { ChooseTypeService } from './choose-type.service';
import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.css'],
})
export class ChooseTypeComponent implements AfterViewInit {
  @ViewChild(NewCompanyComponent, { static: false }) child: NewCompanyComponent;

  constructor(private chooseTypeService: ChooseTypeService) {}

  userType: string;

  compName: string;
  url: string;
  pitch: string;

  ngAfterViewInit(): void {
    console.log('child', this.child);
    this.compName = this.child.compName;
    this.url = this.child.url;
    this.pitch = this.child.pitch;
    console.log(this.compName);
  }

  showCompany(): boolean {
    if (this.userType === 'Entrepreneur') {
      return true;
    }
    return false;
  }

  completeRegistration(): void {
    const playerCompetitionId = window.location.search.split('=')[1];
    if (playerCompetitionId !== '') {
      if (this.showCompany() === true) {
        this.child.onSubmit(playerCompetitionId);
      }
      try {
        console.log(this.userType);
        this.chooseTypeService
          .completeRegistration(this.userType, playerCompetitionId)
          .subscribe((data) => {
            alert('You\'ve completed your registration!' + data);
            window.location.replace('/portfolio');
          });
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}
