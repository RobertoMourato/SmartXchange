import { Component, OnInit } from '@angular/core';
import { Market } from './market';

@Component({
  selector: 'app-market-page-investor',
  templateUrl: './market-page-investor.component.html',
  styleUrls: ['./market-page-investor.component.css']
})
export class MarketPageInvestorComponent implements OnInit {

  market: Market[]=[
    {position: 1, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 2, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 3, name: "Lucas", juryAward: 10, price: 500, gain: 24},
    {position: 4, name: "Lucas", juryAward: 10, price: 500, gain: 24}
  ];
  headers: String[]=["Position", "Name", "Jury Award", "Price", "Gain"]
  dataSource = this.market;


  constructor() { }

  ngOnInit(): void {
  }

}
