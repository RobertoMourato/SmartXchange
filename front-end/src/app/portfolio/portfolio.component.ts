import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from './Offer';
import { MainNavComponent} from '../main-nav/main-nav.component'


const ELEMENT_DATA = [
  { type: 'string', company: 'string', status: 'string', qt: 2, offer: 2 },
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})

export class PortfolioComponent implements OnInit {
  displayedColumns: string[] = [
    'type',
    'company',
    'status',
    'quantity',
    'offer',
    'cancelButton',
  ];

  offers: Offer[];
  dataSource:  MatTableDataSource<Offer>;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Offer>(ELEMENT_DATA);

    console.log(this.dataSource.filteredData);
    //this.dataSource =  new MatTableDataSource(this.offers)
  }
}
