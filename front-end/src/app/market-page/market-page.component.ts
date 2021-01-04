import { Component, OnInit } from '@angular/core';
import { Market } from './market';
import { Router } from '@angular/router';
import { MarketPageService } from './market-page.service';
import { Company } from '../company/company'

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  market: Market[] = [];
  companies: Company[] = [];
  headers: String[]=["Position", "Name", "Price", "Gain", "NextPage"]
  dataSource = [];
  ite = 0;

  constructor(private marketService: MarketPageService, router: Router) { }

  ngOnInit(): void {
    this.marketService.GetCompanyByCompetitionId(window.sessionStorage.getItem("competitionId")).subscribe(data => {
      console.log(data)
      data.forEach(element => {


        
        this.ite++;
        if(element.Company != null) {
          //console.log(element)
          this.companies.push(element.Company.companyName)
          this.market.push({id: element.Company.id, position: this.ite, name: element.Company.companyName, price: element.Company.companyCurrentStockPrice, gain: (element.Company.companyCurrentStockPrice - element.Company.StockValues[0].stockValue)/element.Company.StockValues[0].stockValue*100})
        }
      });
      this.dataSource = this.market;
      //console.log(this.market)
    })
  }

  redirectToCompany(companyId): void {
    window.location.replace("/market-list?companyId="+companyId)
  }
}
