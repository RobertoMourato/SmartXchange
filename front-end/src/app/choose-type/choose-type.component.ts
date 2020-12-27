import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { MatRadioModule } from '@angular/material/radio';
import { NewCompanyComponent } from '../new-company/new-company.component';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.css'],
})
export class ChooseTypeComponent implements OnInit {
  constructor(private NewCompanyComponent: NewCompanyComponent) {}
  userType: string;
  ngOnInit(): void {

  }
  
  showCompany(){
    if(this.userType == 'Entrepreneur'){
      return true
    }
  }
}
