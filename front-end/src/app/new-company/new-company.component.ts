import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewCompanyService } from './new-company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
})
export class NewCompanyComponent {
  constructor(private newCompanyService: NewCompanyService, router: Router) {}

  compName: string;
  url: string;
  pitch: string;

  onSubmit(playerCompetition: string): void {
    this.newCompanyService
      .CreateNewCompany(playerCompetition, this.compName, this.url, this.pitch)
      .subscribe((data) => {
        alert('Company Created' + data);
      });
  }
  changeCompName(newValue: string) {
    this.compName = newValue;
    console.log(this.compName);
  }

  changeUrl(newValue: string) {
    this.url = newValue;
    console.log(this.url);
  }

  changePitch(newValue: string) {
    this.pitch = newValue;
    console.log(this.pitch);
  }
}
