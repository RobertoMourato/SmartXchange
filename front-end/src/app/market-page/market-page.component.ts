import { Component, OnInit } from '@angular/core';
import { Market } from './market';
import { Router } from '@angular/router';
import { MarketPageService } from './market-page.service'

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {

  market: Market[]=[
    {position: 1, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 2, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 3, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 4, name: "Lucas", juryAward: 10, price: 500, gain: 24}
  ];
  headers: String[]=["Position", "Name", "Jury Award", "Price", "Gain", "NextPage"]
  dataSource = this.market;


  constructor(private marketService: MarketPageService, router: Router) { }

  ngOnInit(): void {
    this.marketService.GetCompanyByCompetitionId("1").subscribe(data => {
      console.log(data)
    })
  }

}
