import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Ranking } from './ranking';

@Component({
  selector: 'app-home-page-investor',
  templateUrl: './home-page-investor.component.html',
  styleUrls: ['./home-page-investor.component.css']
})
export class HomePageInvestorComponent implements OnInit {

  user: User;
  ranking: Ranking[]=[
    {position: 1, name: "Lucas", price: 500, gain: 24},
    {position: 2, name: "Lucas", price: 500, gain: 24},
    {position: 3, name: "Lucas", price: 500, gain: 24},
    {position: 4, name: "Lucas", price: 500, gain: 24}
  ];
  headers: String[]=["Position", "Name", "Price", "Gain"]
  dataSource = this.ranking;

  constructor() { }

  ngOnInit(): void {
  }

}
