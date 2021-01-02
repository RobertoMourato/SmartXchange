import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketPageListService } from './market-page-list.service';
import { Company } from './company';

@Component({
  selector: 'app-market-page-list',
  templateUrl: './market-page-list.component.html',
  styleUrls: ['./market-page-list.component.css']
})
export class MarketPageListComponent implements OnInit {
  company: Company
  constructor(private marketPageListService: MarketPageListService, router: Router) { }

  ngOnInit(): void {
    this.marketPageListService.getCompany(window.location.search).subscribe(data => {
      console.log(data)
      this.company = data
    })
  }

}
