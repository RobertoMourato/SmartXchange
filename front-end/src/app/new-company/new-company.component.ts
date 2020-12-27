import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewCompanyService } from './new-company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  constructor(private newCompanyService: NewCompanyService, router: Router) {}
  ngOnInit(): void {
    
  }
  onSubmit(compName:String,url:String,pitch:String):void{
    this.newCompanyService.CreateNewCompany(compName, url, pitch)
    alert("Company Created")
  }
}
