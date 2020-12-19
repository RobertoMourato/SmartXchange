import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Offer } from './Offer';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PortfolioOrdersService } from './portfolio-orders.service';

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

  pendingOffers: Array<Offer>;
  completedOffers: Array<Offer>;
  pendingDataSource: MatTableDataSource<Offer>;
  completedDataSource: MatTableDataSource<Offer>;
  constructor(private portfolioService: PortfolioOrdersService) {}

  ngOnInit(): void {
    this.pendingOffers = new Array<Offer>();
    this.getPendingOrders();
    this.pendingDataSource = new MatTableDataSource<Offer>(this.pendingOffers);

    console.log('pendingDatasource', this.pendingDataSource);
    //this.dataSource =  new MatTableDataSource(this.offers)

    this.getCompletedOrders;
    this.completedDataSource = new MatTableDataSource<Offer>(
      this.completedOffers
    );
  }

  getPendingOrders() {
    const username = window.sessionStorage.getItem('user');
    console.log(username);

    this.portfolioService.getPendingOrders(username).subscribe((data) => {
      console.log('data', data);
      data.forEach((element) => {
        if (element.company == null) {
          return;
        }
        this.pendingOffers.push(
          new Offer(
            element.orderType,
            element.company.companyName,
            element.orderStatus,
            element.orderNumStock,
            100
          )
        );
      });

      console.log('pendingOrders', this.pendingOffers);
    });
  }

  getCompletedOrders() {
    const username = window.sessionStorage.getItem('user');
    console.log(username);

    this.portfolioService.getCompletedOrders(username).subscribe((data) => {
      this.completedOffers = data;
    });
  }
}
